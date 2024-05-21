import React, { useEffect } from 'react';
import { useTypeDispatch, useTypeSelector } from '../redux/typeHooks';
import fetchDataProduct from '../redux/fetch/fetchProducts';
import { useParams } from "react-router-dom";
import CardPDP from '../components/CardPDP';
import { addToCart } from '../redux/slice/cartSlice';

const ProductDirectPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { data: product, error } = useTypeSelector((state) => state.product);
    const dispatch = useTypeDispatch();

    useEffect(() => {
        dispatch(fetchDataProduct());
    }, [dispatch]);

    const selectedProduct: any | undefined = product?.find((item: any) => item.id.toString() === id);

    if (!selectedProduct || error) {
        return <div>Errore caricamento dati</div>;
    }

    const handleAddToCart = (size: string) => {
        dispatch(addToCart({ ...selectedProduct, size }));
    };

    return (
        <div>
            <CardPDP
                id={selectedProduct.id}
                title={selectedProduct.name}
                alternative={selectedProduct.name}
                description={selectedProduct.description}
                price={selectedProduct.price}
                image={selectedProduct.image}
                addToCart={handleAddToCart}
            />
        </div>
    );
};

export default ProductDirectPage;
