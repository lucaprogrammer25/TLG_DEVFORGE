import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "../interfaces/type";
import fetchDataProduct from "./fetchProducts";


const initialState: Product = {
    data: [],
    error: null,
    loading: false
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
      setData(state, action: PayloadAction<[] | null>) {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      },
      setLoading(state, action: PayloadAction<boolean>) {
        state.loading = action.payload;
        state.error = null;
      },
      setError(state, action: PayloadAction<string | null>) {
        state.error = action.payload;
        state.loading = false;
      },
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchDataProduct.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(fetchDataProduct.fulfilled, (state, action:PayloadAction<any>) => {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
          })
          .addCase(fetchDataProduct.rejected, (state, action:PayloadAction<any>) => {
            state.loading = false;
            state.error =  action.payload
          });
      },
  });

  export default productSlice.reducer;