import { createAsyncThunk } from "@reduxjs/toolkit";
import { createClient } from "contentful"

const spaceId = import.meta.env.VITE_REACT_SPACE_ID;
/* const contentfulDeliveryApi = import.meta.env.VITE_REACT_CONTENTFUL_DELIVERY_API;   TO BE USED WHEN IN PRODUCTION */
const contentfulPreviewApi = import.meta.env.VITE_REACT_CONTENTFUL_PREVIEW_API;

const fetchDataContentful = createAsyncThunk(
    'contentful/fetchData',
    async () => {

        try {
            const client = createClient({
                space: spaceId,
                accessToken: contentfulPreviewApi,
                host: "preview.contentful.com",
            });

            const entries = await client.getEntries();
            entries.items.map((item) => {
            const avatar = item.fields;
                return avatar
            })
            console.log(sanitizedEntries)
            const data = entries
            return data
        } catch (error) {
            console.error(`Error fetchind data ${error}`);
        }
    }
);

export default fetchDataContentful;