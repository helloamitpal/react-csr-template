import { createStore, compose, applyMiddleware } from 'redux';
import { middleware as reduxPackMiddleware } from 'redux-pack';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel1 from 'redux-persist/es/stateReconciler/autoMergeLevel1';
import { default as reduxThunk } from 'redux-thunk';

import rootReducer from '../reducer/rootReducer';
import api from '../api/apiInterceptor';
import config from '../config';

const persistConfig = {
  key: config.STORAGE_KEY,
  storage,
  stateReconciler: autoMergeLevel1
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [
  reduxThunk.withExtraArgument({ api }),
  reduxPackMiddleware
];

let composeEnhancers;

if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
  if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
  }


  // NOTE: Uncomment the code below to restore support for Redux Saga
  // Dev Tools once it supports redux-saga version 1.x.x
  // if (window.__SAGA_MONITOR_EXTENSION__) {
  //   reduxSagaMonitorOptions = {
  //     sagaMonitor: window.__SAGA_MONITOR_EXTENSION__,
  //   };
  // }
}

const storeEnhancers = [
  applyMiddleware(...middlewares)
];

export default (initialState = {}) => (callback) => {
  const store = createStore(
    persistedReducer,
    initialState,
    compose(...storeEnhancers)
  );
  const storePersisted = persistStore(store, null, callback);
  return { storePersisted, store };
};
