import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CardPLP from '../components/CardPLP';
import { useTypeDispatch, useTypeSelector } from '../redux/typeHooks';
import fetchDataContentful from '../redux/fetchContentful';
import fetchDataProduct from '../redux/fetchProducts';
import { ProductJson } from '../interfaces/type';

const PLP: React.FC = () => {
  const navigate = useNavigate(); // Ottieni la funzione navigate
  const { gender, category = '', id = '' } = useParams();
  const { data: product, error: errorProduct } = useTypeSelector((state) => state.product);
  const { data, error: errorContentful } = useTypeSelector((state) => state.contentful);
  const dispatch = useTypeDispatch();

  useEffect(() => {
    dispatch(fetchDataContentful());
    dispatch(fetchDataProduct());
  }, [dispatch]);

  console.log(data.items);

  const imageMan = data.items && data.items[0].fields.men.fields.file.url;
  const imageWomen = data.items && data.items[0].fields.women.fields.file.url;
  const plpImage = !category && gender === 'men' ? imageMan : !category && gender === 'women' ? imageWomen : '';

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
            .filter((item: ProductJson) => item.gender === gender && (!category || item.category === category) && (!id || item.id.toString() === id))
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
                />
            
            ))}
        </div>
      </div>
    </section>
  );
};

export default PLP;