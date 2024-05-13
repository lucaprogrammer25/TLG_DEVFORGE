import {  useTypeDispatch, useTypeSelector } from "../redux/typeHooks";
import { useEffect } from "react";
import fetchDataContentful from "../redux/fetchProducts";
import CardPDP from '../components/CardPDP';

interface ProductDetails {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

const ProductDirectPage = () => {

    const { data, error } = useTypeSelector((state) => state.contentful); 
    const dispatch = useTypeDispatch();
    
    useEffect(() => {
      dispatch(fetchDataContentful())
    },[dispatch])

    const products = data ? data.map((product: ProductDetails) => product) : [];

    console.log(products);

    if (!data || error) {
        return <div>Errore caricamento dati</div>;
      }

    return <>
    <div className="ProductDirectPage">
        {/* <CardPDP /> */}
    </div>
    </>
}



export default ProductDirectPage

