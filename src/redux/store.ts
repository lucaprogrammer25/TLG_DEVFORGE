import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productSlice from "./slice/productSlice";
import contentfulSlice from "./slice/contentfulSlice";
import cartSlice from "./slice/cartSlice";

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