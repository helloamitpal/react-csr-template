/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import config from '../config';
import NotFoundModule from '../modules/NotFound/Loadable';
import ArticleModule from '../modules/Article/Loadable';
import ArticleDetailsModule from '../modules/Article/Details/Loadable';
import Header from '../components/molecules/Header';
import Footer from '../components/molecules/Footer';
import LocaleContext from '../locale/localeContext';
import { setLocaleCookie } from '../services/cookieService';

const Router = () => {
  const [selectedLocale, setSelectedLocale] = useState(config.FALLBACK_LANGUAGE);

  // setting up cookie for default language
  useEffect(() => {
    setLocaleCookie(config.FALLBACK_LANGUAGE);
  }, []);

  // updating cookie if language is selected
  const onChangeLocale = (val) => {
    setLocaleCookie(selectedLocale);
    setSelectedLocale(val);
  };

  return (
    <LocaleContext.Provider value={{ lang: selectedLocale }}>
      <div className="app-container">
        <Header onChangeLocale={onChangeLocale} />
        <div className="body-container container">
          <Switch>
            <Route exact path={[config.ARTICLE_PAGE, config.SPEICIFIC_ARTICLE_PAGE]} render={(props) => <ArticleModule {...props} />} />
            <Route exact path={config.ARTICLE_DETAILS_PAGE} render={(props) => <ArticleDetailsModule {...props} />} />
            <Route path="" render={(props) => <NotFoundModule {...props} />} />
          </Switch>
        </div>
        <Footer />
      </div>
    </LocaleContext.Provider>
  );
};

export default withRouter(Router);
