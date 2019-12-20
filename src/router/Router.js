/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import config from '../config';
import NotFoundModule from '../modules/NotFound/Loadable';
import ArticleModule from '../modules/Article/Loadable';
import ArticleDetailsModule from '../modules/Article/Details/Loadable';
import Header from '../components/molecules/Header';
import Footer from '../components/molecules/Footer';

import './Router.scss';

const Router = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="body-container container">
        <Switch>
          <Route exact path={[config.ARTICLE_PAGE, config.SPEICIFIC_ARTICLE_PAGE]} render={(props) => <ArticleModule {...props} />} />
          <Route exact path={config.ARTICLE_DETAILS_PAGE} render={(props) => <ArticleDetailsModule {...props} />} />
          <Route path="" render={(props) => <NotFoundModule {...props} />} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default withRouter(Router);
