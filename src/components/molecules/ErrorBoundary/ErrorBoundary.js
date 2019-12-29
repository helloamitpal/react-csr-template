import React from 'react';
import PropTypes from 'prop-types';

import translate from '../../../locale';

import './errorBoundary.scss';

class ErrorBoundary extends React.Component {
  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    console.log('The app is crashed due to unknown reason');
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <div className="error-container">
          <h1 className="gradient-background">{translate('common.somethingWentWrongTitle')}</h1>
          <p>{translate('common.somethingWentWrongDesc')}</p>
        </div>
      );
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired
};

export default ErrorBoundary;
