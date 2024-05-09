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
                host:"preview.contentful.com",
            });

            const response= await client.getEntries();
          /*   const sanitizedEntries = response.items.map((item) => {
            const avatar=item.fields;
                return avatar   
            })  */
            const data=response
            return data                 
        } catch (error) {
            console.error(`error fetchind data ${error}`);
        }
    }
);

export default fetchDataContentful;