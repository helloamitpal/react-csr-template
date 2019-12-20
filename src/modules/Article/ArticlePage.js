import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import * as articleActionCreator from './articleActionCreator';
import config from '../../config';

const ArticlePage = ({
  articleState: { articles, error, loading },
  articleActions,
  history,
  match,
  location: { pathname }
}) => {
  const category = articles[0] && articles[0].source.name;
  const head = () => (
    <Helmet key={`article-page-${Math.random()}`}>
      <title>Article List</title>
      <meta property="og:title" content="Article list" />
      <meta
        name="description"
        content="Breaking news,latest articles, popular articles from most popular news websites of the world"
      />
      <meta name="robots" content="index, follow" />
      <link
        rel="canonical"
        href={`https://react-csr-template.herokuapp.com${pathname || ''}`}
      />
    </Helmet>
  );

  const gotoArticleDetails = article => {
    history.push({
      pathname: config.ARTICLE_DETAILS_PAGE,
      state: { ...article }
    });
  };

  const renderArticles = () => {
    return articles.map((article) => (
      <div className="col s12 m6 l6 xl4 card-container" key={article.title}>
        <div className="card large">
          <div className="card-image">
            <LazyLoadImage alt={article.title} src={article.urlToImage} />
          </div>
          <div className="card-content">
            <span className="card-title">{article.title}</span>
          </div>
          <div className="card-action">
            <span className="link" onClick={() => gotoArticleDetails(article)}>Read More</span>
          </div>
        </div>
      </div>
    ));
  };

  useEffect(() => {
    const id = (match.params && match.params.id) || '';
    window.scrollTo(0, 0);
    articleActions.fetchArticles(id);
  }, [match.params]);

  return (
    <div className="article-page-container">
      {head()}
      <div className="row">
        <div className="section">
          <h3>{category || 'Popular Articles'}</h3>
        </div>
        <div className="divider" />
        <div className="section">
          <div className="row">{articles && renderArticles()}</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  articleState: state.article
});

const mapDispatchToProps = (dispatch) => ({
  articleActions: bindActionCreators(articleActionCreator, dispatch)
});

ArticlePage.propTypes = {
  articleState: PropTypes.object,
  articleActions: PropTypes.object,
  history: PropTypes.object,
  match: PropTypes.object,
  location: PropTypes.object
};

ArticlePage.defaultProps = {
  articleState: {},
  articleActions: {},
  history: {},
  match: {},
  location: {}
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);
