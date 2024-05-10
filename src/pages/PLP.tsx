import { useTypeDispatch, useTypeSelector } from "../redux/typeHooks";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchDataContentful from "../redux/fetchProducts";
import CardPLP from "../components/CardPLP";
import { ProductJson } from "../interfaces/type";

const PLP: React.FC = () => {
  const { gender, category = '' } = useParams(); // Qui do un valore a category in modo da renderlo opzionale
  const { data, error } = useTypeSelector((state) => state.product);
  const dispatch = useTypeDispatch();

  useEffect(() => {
    dispatch(fetchDataContentful());
  }, [dispatch]);

    const plpImage = !category && gender === 'men'  ? {imageMen} : !category && gender === 'women' {imageWoman} : '';
    




  if (!data || error) {
    return <div>Errore caricamento dati</div>;
  }

  return (
    <section>
      <h1 id="titleProductPage">Product</h1>
      <div className="containerCards">
        {data
          .filter((item: ProductJson) => item.gender === gender && (!category || item.category === category)) //il parametro gender verrà preso a prescindere dal parametro category, prenderà i filtri dai params di useParams scritti nell'URL
          .map((item: ProductJson) => (
            <CardPLP
              key={item.id}
              id={item.id}
              category={item.category}
              title={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
              alternative={`${item.gender} ${item.category}`}
            />
          ))}
      </div>
    </section>
  );
};

export default PLP;
