import React from 'react';

import translate from '../../locale';

const NotFoundPage = () => {
  return (
    <div className="ui container">
      <h1>{translate('common.pageNotFound')}</h1>
      <p>{translate('common.tryAgain')}</p>
    </div>
  );
};

export default NotFoundPage;
