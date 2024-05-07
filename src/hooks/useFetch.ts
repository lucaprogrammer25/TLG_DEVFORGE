import { useEffect, useState } from 'react';
import * as contentful from 'contentful';
import { ProductJson } from '../interfaces/type';

const useFetch = ({ content_type= '' }:{content_type:string}) => {  // passo come prop il content_type da decidere se lasciare così o meno
    const [data, setData] = useState<ProductJson[] | null>(null); // qui i dati sono castati potranno essere un'array di oggetti (vedi type.ts per l'alias) o null (fase di caricamento dati)
    const [error, setError] = useState<string>(""); //error castato string

    useEffect(() => {
        const fetchData = async () => {
            try {
                const client = contentful.createClient({
                    space: '8qkihup1rkq3',
                    accessToken: '4_mGbaQopHavEn9AfYMubIDwKwGs417I9jy-AaOmrMg',
                    host: "preview.contentful.com",
                });

                const response = await client.getEntries({ content_type });
                if (response && response.items && response.items.length > 0) {
                    setData(response.items[0].fields.jsonProduct as []);
                } 
            } catch (error) {
                setError("Errore: Impossibile caricare i dati");
                console.error(error);
            }
        };

        fetchData();
    }, []); 

    useEffect(() => {  //controllo dati, eliminabile in futuro, lo manteniamo fino a quando i dati non sono definitivi
       !data ? null  : console.log(data);
    }, [data]);

    return { data, error };
}

export default useFetch;
