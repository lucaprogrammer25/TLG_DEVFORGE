import { useTypeDispatch, useTypeSelector } from "../redux/typeHooks";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { ProductJson } from "../interfaces/type";
import CardPLP from "../components/CardPLP";
import { addToCart }  from "../redux/slice/cartSlice";
import fetchDataContentful from "../redux/fetch/fetchContentful";
import fetchDataProduct from "../redux/fetch/fetchProducts";

const PLP: React.FC = () => {
  const { gender, category = '' } = useParams(); 
  const { data:product, error: errorProduct  } = useTypeSelector((state) => state.product);
  const { data } = useTypeSelector((state) => state.contentful)


  const dispatch = useTypeDispatch();
  useEffect(() => {
    dispatch(fetchDataContentful());
    dispatch(fetchDataProduct());
  }, [dispatch]);

  const navigate = useNavigate();

  const imageMan = data.items && data.items[0].fields.men.fields.file.url;
  const imageWomen = data.items && data.items[0].fields.women.fields.file.url;
  const plpImage =
    !category && gender === "men"
      ? imageMan
      : !category && gender === "women"
      ? imageWomen
      : "";

  if (!product || errorProduct) {
    return <div><FormattedMessage id="error"/></div>;
  }

  return (
    <section>
      <img className="imageProduct" src={plpImage} alt="" />
      <div className="wrapCard">
      <h1 id="titleProductPage">Product</h1>
      <div className="containerCards">
        {product
          .filter((item: ProductJson) => item.gender === gender && (!category || item.category === category)) 
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
                  goToPDP={() => navigate(`/pdp/${item.id}`)}
                  addToCart={() => dispatch(addToCart( item ))}
                  />
            ))}
        </div>
      </div>
    </section>
  );
};

export default PLP;
