import { combineReducers } from 'redux';

import articleReducer from '../modules/Article/articleReducer';

// this is the root reducer to combine module wise reducers
const rootReducer = combineReducers({
  article: articleReducer
});

export default rootReducer;
