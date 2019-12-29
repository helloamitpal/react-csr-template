import React from 'react';
import PropTypes from 'prop-types';

import translate from '../../locale';

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return (
    <div className="ui container">
      <h1>{translate('common.pageNotFound')}</h1>
      <p>{translate('common.tryAgain')}</p>
    </div>
  );
};

NotFoundPage.propTypes = {
  staticContext: PropTypes.objectOf(PropTypes.any)
};

NotFoundPage.defaultProps = {
  staticContext: {}
};

export default {
  component: NotFoundPage
};
