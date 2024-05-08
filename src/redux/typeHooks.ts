import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { AppDispatch, RootState } from "./store";

export const useTypeDispatch: () => AppDispatch = useDispatch
export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector