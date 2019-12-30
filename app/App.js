import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Router from './router/Router';
import configureStore from './store/configureStores';
import config from './config';

class AppRootContainer extends Component {
  constructor() {
    super();
    const { store } = configureStore()(this.onRehydrate);
    this.state = {
      store,
      rehydrated: false
    };
  }

  onRehydrate = () => {
    this.setState({ rehydrated: true });
  }

  render() {
    const { store, rehydrated } = this.state;

    const content = rehydrated ? (
      <Provider store={store} key={config.STORAGE_KEY}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Provider>
    ) : null;

    return content;
  }
}

export default AppRootContainer;
