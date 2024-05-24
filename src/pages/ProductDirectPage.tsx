import React, { useEffect } from "react";
import { useTypeDispatch, useTypeSelector } from "../redux/typeHooks";
import fetchDataProduct from "../redux/fetch/fetchProducts";
import { useNavigate, useParams } from "react-router-dom";
import CardPDP from "../components/CardPDP";
import { addToCart } from "../redux/slice/cartSlice";
import CarouselPDP from "./CarouselPDP";

interface ProductPDP {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  gender: string;
}

const ProductDirectPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: products, error } = useTypeSelector((state) => state.product);
  const dispatch = useTypeDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchDataProduct());
  }, [dispatch]);

  const selectedProduct: ProductPDP | undefined = products?.find(
    (item: ProductPDP) => item.id.toString() === id
  );

  if (!selectedProduct || error) {
    return <div>Errore caricamento dati</div>;
  }

  const filteredProducts: ProductPDP[] = products.filter(
    (item: ProductPDP) =>
      item.category === selectedProduct.category &&
      item.gender === selectedProduct.gender &&
      item.id.toString() !== id
  );

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
        category={selectedProduct.category}
      />
      <div>
        <CarouselPDP items={filteredProducts} />
      </div>
    </div>
  );
};

export default ProductDirectPage;
