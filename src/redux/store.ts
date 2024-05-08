import { configureStore, combineReducers } from "@reduxjs/toolkit";
import contentfulSlice from "./contentfulSlice";

const rootReducer = combineReducers({
  contentful: contentfulSlice
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;