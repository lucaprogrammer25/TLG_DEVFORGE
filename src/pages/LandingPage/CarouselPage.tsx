import { useEffect } from "react";
import Carousel from "../../components/Carousel/Carousel";
import { useTypeDispatch, useTypeSelector } from "../../redux/typeHooks";
import fetchDataProduct from "../../redux/fetch/fetchProducts";

interface Product {
  image: string;
  name: string;
  price: string;
  gender: string;
  id: string;
  category: string;
}

interface Category {
  category?: string;
}

const CarouselPage: React.FC<Category> = ({ category }) => {
  const { data, error } = useTypeSelector((state) => state.product);

  const dispatch = useTypeDispatch();
  useEffect(() => {
    dispatch(fetchDataProduct());
  }, [dispatch]);

  let dataImages: any = [];

  if (category) {
    dataImages = data?.filter(
      (_, index, category) => category[index] === category
    );
  } else {
    dataImages = data ? data.map((item: Product) => item.image) : [];
  }

  const dataProduct = data ? data.map((item: Product) => item.name) : [];
  const dataPrice = data ? data.map((item: Product) => item.price) : [];
  const id = data ? data.map((item: Product) => item.id) : [];
  const dataGender = data ? data.map((item: Product) => item.gender) : [];
  const dataCategory = data ? data.map((item: Product) => item.category) : [];

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
          id={id}
          gender={dataGender}
          category={dataCategory}
        />
      ) : (
        <div>
          loading
        </div>
      )}
    </div>
  );
};

export default CarouselPage;
