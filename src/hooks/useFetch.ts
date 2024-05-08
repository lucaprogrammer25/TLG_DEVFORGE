import { useEffect, useState } from 'react';
import { ProductJson } from '../interfaces/type';

const useFetch = ({ url = '' }: { url: string }) => {
    const [data, setData] = useState<ProductJson[] | null>(null);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (response.ok) {
                    const jsonData = await response.json();
                    setData(jsonData);
                } else {
                    throw new Error(`Errore ${response.status}: ${response.statusText}`);
                }
            } catch (error) {
                setError("Errore: Impossibile caricare i dati");
                console.error(error);
            }
        };

        fetchData();
    }, [url]);

    useEffect(() => {
        // Aggiungi qui eventuali controlli sui dati
        !data ? null : console.log(data);
    }, [data]);

    return { data, error };
}

export default useFetch;
