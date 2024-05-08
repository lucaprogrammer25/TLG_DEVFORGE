import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchDataContentful = createAsyncThunk(
    'contentful/fetchData',
    async () => {
        try {
            const response = await fetch('http://localhost:3000/api/product');
            if (response.ok) {
                const data = await response.json();
                return data
            } else {
                throw new Error(`Errore ${response.status}: ${response.statusText}`);
            }
        } catch (error) {
            console.error(error);
        }
    }
);

export default fetchDataContentful;