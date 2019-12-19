import * as actionTypes from './articleActionTypes';

export const fetchArticles = source => (dispatch, getState, { api }) => {
  const param = source ? `sources=${source}` : 'country=us';
  dispatch({
    type: actionTypes.FETCH_ARTICLES,
    promise: api.get(`/top-headlines?${param}`),
    payload: {}
  });
};
