import { useTypeDispatch, useTypeSelector } from "../redux/typeHooks";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CardPLP from "../components/CardPLP";
import { ProductJson } from "../interfaces/type";
import fetchDataContentful from "../redux/fetchContentful";
import fetchDataProduct from "../redux/fetchProducts";

const PLP: React.FC = () => {
  const { gender, category = '' } = useParams(); // Qui do un valore a category in modo da renderlo opzionale
  const { data:product, error: errorProduct  } = useTypeSelector((state) => state.product);
  const { data } = useTypeSelector((state) => state.contentful)
  const dispatch = useTypeDispatch();

  useEffect(() => {
    dispatch(fetchDataContentful());
    dispatch(fetchDataProduct());
  }, [dispatch]);

  console.log(product);
  
    const imageMan = data.items && data.items[0].fields.men.fields.file.url;
    const imageWomen = data.items && data.items[0].fields.women.fields.file.url
    const plpImage = !category && gender === 'men'  ? imageMan : !category && gender === 'women' ? imageWomen : '';
    




  if (!product || errorProduct) {
    return <div>Errore caricamento dati</div>;
  }

  return (
    <section>
      <img className="imageProduct" src={plpImage} alt="" />
      <div className="wrapCard">
      <h1 id="titleProductPage">Product</h1>
      <div className="containerCards">
        {product
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
