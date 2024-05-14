import { useEffect } from "react";
import Carousel from "../components/Carousel/Carousel";
import { useTypeDispatch, useTypeSelector } from "../redux/typeHooks";
import fetchDataContentful from "../redux/fetchProducts";

interface Product {
  image: string;
  name: string;
  price: string;
  category: string;
}


const Home = () => {
  const { data, error } = useTypeSelector((state) => state.contentful);
  console.log(data);

  const dispatch = useTypeDispatch();
  useEffect(() => {
    dispatch(fetchDataContentful());
  }, [dispatch]);

  const dataImages = data ? data.map((item: Product) => item.image) : [];
  const dataProduct = data ? data.map((item: Product) => item.name) : [];
  const dataPrice = data ? data.map((item: Product) => item.price) : [];
  const dataCategory = data ? data.map((item: Product) => item.category) : [];

  if (error) {
    return <div>Error loading data!</div>;
  }

  return (
    <div>
      <h1>Carosello troppo bello</h1>
      {dataImages.length > 0 ? (
        <Carousel
          images={dataImages}
          names={dataProduct}
          prices={dataPrice}
          category={dataCategory}
        />
      ) : (
        <div>Loading images...</div>
      )}
    </div>
  );
};

export default Home;
