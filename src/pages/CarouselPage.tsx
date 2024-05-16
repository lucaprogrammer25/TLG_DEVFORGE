import { useEffect } from "react";
import Carousel from "../components/Carousel/Carousel";
import { useTypeDispatch, useTypeSelector } from "../redux/typeHooks";
import fetchDataProduct from "../redux/fetchProducts";

interface Product {
  image: string;
  name: string;
  price: string;
  category: string;
  id: string;
}

const CarouselPage = () => {
  const { data, error } = useTypeSelector((state) => state.product);
  console.log(data);

  const dispatch = useTypeDispatch();
  useEffect(() => {
    dispatch(fetchDataProduct());
  }, [dispatch]);

  const dataImages = data ? data.map((item: Product) => item.image) : [];
  const dataProduct = data ? data.map((item: Product) => item.name) : [];
  const dataPrice = data ? data.map((item: Product) => item.price) : [];
  const dataCategory = data ? data.map((item: Product) => item.category) : [];
  const id = data ? data.map((item: Product) => item.id) : [];

  if (error) {
    return <div>Error loading data!</div>;
  }


  return (
    <div>
      {dataImages.length > 0 ? (
        <Carousel
          images={dataImages}
          names={dataProduct}
          prices={dataPrice}
          category={dataCategory}
          id={id}
          
        />
      ) : (
        <div>Loading images...</div>
      )}
    </div>
  );
};

export default CarouselPage;
