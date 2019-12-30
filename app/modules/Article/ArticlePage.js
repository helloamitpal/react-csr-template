import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import * as articleActionCreator from './articleActionCreator';
import LoadingIndicator from '../../components/atoms/LoadingIndicator';
import Message from '../../components/atoms/Message';
import config from '../../config';
import translate from '../../locale';

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
      <title>{translate('article.articleList')}</title>
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
            <span className="link" onClick={() => gotoArticleDetails(article)}>{translate('common.readMore')}</span>
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
      {loading && <LoadingIndicator />}
      {!loading && error && <Message type="error" title={translate('common.oops')} description={error} />}
      <div className="row">
        {
          articles && articles.length ? (
            <Fragment>
              <div className="section">
                <h3>{category || translate('article.popularArticle')}</h3>
              </div>
              <div className="divider" />
              <div className="section">
                <div className="row">{renderArticles()}</div>
              </div>
            </Fragment>
          ) : null
        }
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
