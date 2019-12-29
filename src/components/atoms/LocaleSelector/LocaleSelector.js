import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import LocaleContext from '../../../locale/localeContext';

import './localeSelector.scss';

const LocaleSelector = ({ langs, onChangeLocale, className }) => {
  return (
    <div className={`locale-selector-container ${className}`}>
      <LocaleContext.Consumer>
        {({ lang, changeLocale }) => (
          langs.map(({ value, label }, index) => (
            <Fragment key={`locale-selector-${value}`}>
              <span onClick={() => onChangeLocale(value)}>{label}</span>
              {index < langs.length - 1 ? <span className="divider" /> : null}
            </Fragment>
          ))
        )}
      </LocaleContext.Consumer>
    </div>
  );
};

LocaleSelector.propTypes = {
  onChangeLocale: PropTypes.func.isRequired,
  className: PropTypes.string,
  langs: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  }))
};

LocaleSelector.defaultProps = {
  className: '',
  langs: [{
    label: 'EN',
    value: 'en'
  }, {
    label: 'DE',
    value: 'de'
  }]
};

export default LocaleSelector;
