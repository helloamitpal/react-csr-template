import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import translate from '../../../locale';

const ArticleDetailsPage = ({ history, location: { state, pathname } }) => {
  const { title, urlToImage, description, content, url } = state;

  const head = () => (
    <Helmet key={`article-details-page-${Math.random()}`}>
      <title>{translate('article.detailsTitle')}</title>
      <meta property="og:title" content="Article details" />
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

  return (
    <div className="article-details-ccontainer">
      {head()}
      <h4>{title}</h4>
      <img className="responsive-img" src={urlToImage} alt={title} />
      <p>{description}</p>
      <p>{content}</p>
      <div className="divider" />
      <div className="section">
        <a
          href={url}
          className="waves-effect waves-light btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          {translate('article.fullArticle')}
        </a>
      </div>
    </div>
  );
};

ArticleDetailsPage.propTypes = {
  location: PropTypes.object,
  history: PropTypes.object
};

ArticleDetailsPage.defaultProps = {
  location: {},
  history: {}
};

export default ArticleDetailsPage;
