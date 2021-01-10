import { combineReducers } from '@reduxjs/toolkit';

import keywordssReducer from './keywordsSlice';

const rootReducer = combineReducers({
  keywords: keywordssReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
