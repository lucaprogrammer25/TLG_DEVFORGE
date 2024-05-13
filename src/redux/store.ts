import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import contentfulSlice from "./contentfulSlice";

const rootReducer = combineReducers({
  product: productSlice,
  contentful: contentfulSlice,
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;