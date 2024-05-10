import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ContentfulProduct } from "../interfaces/type";
import fetchDataProduct from "./fetchProducts";


const initialState: ContentfulProduct = {
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
          .addCase(fetchDataproduct.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(fetchDataproduct.fulfilled, (state, action:PayloadAction<any>) => {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
          })
          .addCase(fetchDataproduct.rejected, (state, action:PayloadAction<any>) => {
            state.loading = false;
            state.error =  action.payload
          });
      },
  });

  export default productSlice.reducer;