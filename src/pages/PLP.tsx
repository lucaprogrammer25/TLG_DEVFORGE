import { useTypeDispatch, useTypeSelector } from "../redux/typeHooks";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { ProductJson } from "../interfaces/type";
import CardPLP from "../components/CardPLP";
import fetchDataContentful from "../redux/fetch/fetchContentful";
import fetchDataProduct from "../redux/fetch/fetchProducts";
import BreadCrumbs from "../components/BreadCrumbs";

const PLP: React.FC = () => {
  const { gender, category = "" } = useParams();
  const { data: product, error: errorProduct } = useTypeSelector(
    (state) => state.product
  );
  const { data } = useTypeSelector((state) => state.contentful);
  const dispatch = useTypeDispatch();
  const navigate = useNavigate();
  const [displayedCards, setDisplayedCards] = useState(12);
  const [maxItems, setMaxItems] = useState<number | null>(null);

  useEffect(() => {
    dispatch(fetchDataContentful());
    dispatch(fetchDataProduct());
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (product) {
      const count = product.reduce(
        (acc, item: ProductJson) => (item.gender === gender ? acc + 1 : acc),
        0
      );
      setMaxItems(count);
    }
  }, [product, gender]);

  const imageMan = data.items && data.items[5].fields.men.fields.file.url;
  const imageWomen = data.items && data.items[5].fields.women.fields.file.url;
  const plpImage =
    !category && gender === "men"
      ? imageMan
      : !category && gender === "women"
      ? imageWomen
      : "";

  if (!product || errorProduct) {
    return (
      <div>
        <FormattedMessage id="error" />
      </div>
    );
  }

  const handleLoadMore = () => {
    setDisplayedCards((prevCount) => Math.min(prevCount + 12, product.length));
  };

  const isLoadMoreVisible =
    (category === "" || category === "accessories") &&
    (maxItems ? displayedCards < maxItems : true);

  return (
    <>
      <img className="imageProduct" src={plpImage} alt="" loading="lazy" />
      <div className="wrapCard">
        {category ? <BreadCrumbs /> : null}
        <div className="containerCards">
          {product
            .filter(
              (item: ProductJson) =>
                item.gender === gender &&
                (!category || item.category === category)
            )
            .slice(0, displayedCards)
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
                goToPDP={() =>
                  navigate(`/${item.gender}/${item.category}/${item.id}`)
                }
                seeMoreButton={() =>
                  navigate(`/${item.gender}/${item.category}/${item.id}`)
                }
              />
            ))}
        </div>
      </div>
      {isLoadMoreVisible && (
        <div onClick={handleLoadMore} className="loadMorePlpButton">
          <span>
            <FormattedMessage id="load more" defaultMessage="Load more" />
          </span>
          <span>{`${displayedCards} - ${maxItems}`}</span>
        </div>
      )}
    </>
  );
};

export default PLP;
