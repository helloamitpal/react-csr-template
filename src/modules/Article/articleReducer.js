import { handle } from 'redux-pack';

import * as actionTypes from './articleActionTypes';
import translate from '../../locale';

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
      ? translate('common.networkTryAgain')
      : translate('common.tryAgainSometime')
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
        success: prevState => {
          if (payload.articles) {
            return {
              ...prevState,
              articles: [...payload.articles]
            };
          }
          return failureMessage(prevState);
        },
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
