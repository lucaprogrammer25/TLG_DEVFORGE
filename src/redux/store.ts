import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productSlice from "./productSlice";

const rootReducer = combineReducers({
  product: productSlice
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;