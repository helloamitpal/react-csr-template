import { handle } from 'redux-pack';

import * as actionTypes from './articleActionTypes';

const initialState = {
  articles: [],
  error: '',
  loading: false
};

// common failure function for all APIs
const failureMessage = (prevState, payload) => ({
  ...prevState,
  error:
    payload && payload.message === 'Network Error'
      ? 'Please check the network and try again.'
      : 'Something went wrong. Please try again after some time.'
});

const articleReducer = (state = initialState, action = '') => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.FETCH_ARTICLES:
      return handle(state, action, {
        start: prevState => ({
          ...prevState,
          error: '',
          loading: true
        }),
        success: prevState => ({
          ...prevState,
          articles: [...payload.articles]
        }),
        failure: prevState => failureMessage(prevState, payload),
        finish: prevState => ({
          ...prevState,
          loading: false
        })
      });

    default:
      return state;
  }
};

export default articleReducer;
