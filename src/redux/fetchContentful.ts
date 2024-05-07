import { createAsyncThunk } from "@reduxjs/toolkit";
import * as contentful from 'contentful';

const fetchDataContentful = createAsyncThunk(
    'contentful/fetchData',
    async () => {
        try {
            const client = contentful.createClient({
                space: '8qkihup1rkq3',
                accessToken: '4_mGbaQopHavEn9AfYMubIDwKwGs417I9jy-AaOmrMg',
                host: "preview.contentful.com",
            });

            const response = await client.getEntries({content_type:"Json"});
            if (response) {
                const data = response.items[0].fields.jsonProduct 
                return data;
            } else {
                throw new Error("No data obtained");
            }
        } catch (error) {
            throw new Error("Error: Unable to load data");
        }
    }
);

export default fetchDataContentful;
