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
    const imageMan = 'https://hips.hearstapps.com/hmg-prod/images/outfit-autunnali-moda-uomo-2018-3-ok-1-1539004468.jpg';
    const imageWomen = 'https://images.pexels.com/photos/19956458/pexels-photo-19956458/free-photo-of-moda-occhiali-da-sole-donna-estate.jpeg'
    const plpImage = !category && gender === 'men'  ? imageMan : !category && gender === 'women' ? imageWomen : '';
    




  if (!data || error) {
    return <div>Errore caricamento dati</div>;
  }

  return (
    <section>
      <img className="imageProduct" src={plpImage} alt="" />
      <div className="wrapCard">
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
      </div>
    </section>
  );
};

export default PLP;
