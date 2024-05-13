import React, { useEffect } from 'react';
import { useTypeDispatch, useTypeSelector } from '../redux/typeHooks';
import fetchDataProduct from '../redux/fetchProducts';
import { useParams } from "react-router-dom";
import { ProductJson } from '../interfaces/type';
import CardPDP from '../components/CardPDP';

const ProductDirectPage: React.FC = () => {
    const { id } = useParams<{ id: string }>(); // Assicura che id sia di tipo stringa
    const { data: product, error } = useTypeSelector((state) => state.product);
    const dispatch = useTypeDispatch();

    useEffect(() => {
        dispatch(fetchDataProduct());
    }, [dispatch]);

    // Trova il prodotto corrispondente all'id dalla URL
    const selectedProduct: ProductJson | undefined = product?.find((item: ProductJson) => item.id.toString() === id);

    if (!selectedProduct || error) {
        return <div>Errore caricamento dati</div>;
    }

    return (
        <div>
            <CardPDP
                key={selectedProduct.id}
                title={selectedProduct.name}
                description={selectedProduct.description}
                price={selectedProduct.price}
                image={selectedProduct.image}
            />
        </div>
    );
};

export default ProductDirectPage;