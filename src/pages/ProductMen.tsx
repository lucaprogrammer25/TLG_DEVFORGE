import {  useTypeDispatch, useTypeSelector } from "../redux/typeHooks";
import { ProductJson } from "../interfaces/type";
import { useEffect } from "react";
import fetchDataContentful from "../redux/fetchContentful";
import CardPLP from "../components/CardPLP";

const ProductMen: React.FC = () => {
  
  const { data, error } = useTypeSelector((state) => state.contentful); 
  const dispatch = useTypeDispatch();
  
  useEffect(() => {
    dispatch(fetchDataContentful())
  },[dispatch])

  console.log(data);

    
  if (!data || error) {
    return <div>Errore caricamento dati</div>;
  }

  return (
    <>
    <div className="containerCards">
      {
        data && data.length &&
        data.map((item: ProductJson) => {
          if (item.gender === "men") {
            return (
              <CardPLP
                key={item.id}
                id={item.id}
                category={item.category}
                title={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
                alternative={`${item.gender + " " + item.category}`}
              />
            );
          } else {
            return null; // Se l'elemento non corrisponde al genere "male", non viene visualizzato
          }
        })
      }
    </div>
</>
  );
};

export default ProductMen;
