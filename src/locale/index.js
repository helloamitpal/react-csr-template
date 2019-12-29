/* eslint-disable react/no-danger */

import React from 'react';
import _ from 'lodash';

import LocaleContext from './localeContext';
import { getLocaleCookie } from '../services/cookieService';
import config from '../config';
import locales from './langs/locales.json';

const isHTML = (str) => (/<(?=.*? .*?\/ ?>|br|hr|input|!--|wbr)[a-z]+.*?>|<([a-z]+).*?<\/\1>/i.test(str));

const getReplacedJSXTemplate = (template, regex, attr, val) => {
  const parts = template.split(regex);

  return (
    <React.Fragment>
      {
        parts.map((ele, index) => {
          const partTemplate = (isHTML(ele)) ? <span key={`locale-${attr}-${index.toString()}`} dangerouslySetInnerHTML={{ __html: ele }} /> : ele;

          if (index < parts.length - 1) {
            return (
              <React.Fragment key={`locale-${attr}-${index.toString()}`}>
                {partTemplate}
                {val}
              </React.Fragment>
            );
          }

          return partTemplate;
        })
      }
    </React.Fragment>
  );
};

const translate = (key, values, isJSXElement = false) => {
  const keys = key && key.split('.');
  let { lang } = LocaleContext._currentValue;
  lang = lang || getLocaleCookie() || config.FALLBACK_LANGUAGE;

  // In case of any anomalies found
  if (!lang || !locales || (keys && (keys.length > 2 || keys.length === 0))) {
    console.error('Locale key is given is wrong format. It must follow this signature: <moduleName>.<localeName>');
    return key;
  }

  let template = '';
  const [moduleName, locale] = keys;

  // in case of any mis-spelled or wrong key used, the corresponding locale
  // would not be found. In that case, instead of throwing the error, it would
  // return given key
  try {
    template = locales[lang][moduleName][locale];
  } catch (err) {
    console.error('Either module or language language file is missing');
    return key;
  }

  // replacing locale texts
  _.forOwn(values, (val, attr) => {
    const regex = new RegExp(`\\\${${attr}}`, 'g');

    if (isJSXElement) {
      template = getReplacedJSXTemplate(template, regex, attr, val);
    } else {
      template = template.replace(regex, val);
    }
  });

  // any HTML templates will be detected and considered while rendeing
  template = (isHTML(template) && !isJSXElement) ? <span dangerouslySetInnerHTML={{ __html: template }} /> : template;

  // returning the localized text template
  return template || key;
};

export default translate;
