import { createAsyncThunk } from "@reduxjs/toolkit";

const api = import.meta.env.VITE_REACT_FETCH_API;

const fetchDataProduct = createAsyncThunk(
    'product/fetchData',
    async () => {
        try {
            const response = await fetch(api);
            if (response.ok) {
                const data = await response.json();
                return data
            } else {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }
        } catch (error) {
            console.error(error);
        }
    }
);

export default fetchDataProduct;