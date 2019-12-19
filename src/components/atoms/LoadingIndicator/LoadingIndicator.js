import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './LoadingIndicator.scss';

const LoadingIndicator = ({ type }) => {
  const html = (
    <Fragment>
      <div />
      <div />
      <div />
    </Fragment>
  );
  return <div className={`loading-indicator ${type}`}>{html}</div>;
};

LoadingIndicator.defaultProps = {
  type: 'linear'
};

LoadingIndicator.propTypes = {
  type: PropTypes.oneOf(['linear'])
};

export default LoadingIndicator;
