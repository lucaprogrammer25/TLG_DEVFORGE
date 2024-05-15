import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import contentfulSlice from "./contentfulSlice";
import cartSlice from "./cartSlice";

const rootReducer = combineReducers({
  product: productSlice,
  contentful: contentfulSlice,
  cart:cartSlice,
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;