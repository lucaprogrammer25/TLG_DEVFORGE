import Card from "../components/CardPLP";
import {  useTypeDispatch, useTypeSelector } from "../redux/typeHooks";
import { ProductJson } from "../interfaces/type";
import { useEffect } from "react";
import fetchDataContentful from "../redux/fetchProducts";

const ProductWoman: React.FC = () => {
  
  const { data, error } = useTypeSelector((state) => state.contentful); 
  const dispatch = useTypeDispatch();
  
  useEffect(() => {
    dispatch(fetchDataContentful())
  },[dispatch])

  console.log(data);

    
  if (!data || error) {
    return <div>Error loading data</div>;
  }

  return (
    <>
    <div className="containerCards">
      {
        data && data.length &&
        data.map((item: ProductJson) => {
          if (item.gender === "woman") {
            return (
              <Card
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

export default ProductWoman;
