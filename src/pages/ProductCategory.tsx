// import { useTypeDispatch, useTypeSelector } from "../redux/typeHooks";
// import { ProductJson } from "../interfaces/type";
// import { useEffect } from "react";
// import fetchDataContentful from "../redux/fetchProducts";
// import CardPLP from "../components/CardPLP";
// import { useParams } from "react-router-dom";

// const ProductAccessories: React.FC = () => {
//   const { data, error } = useTypeSelector((state) => state.contentful);
//   const dispatch = useTypeDispatch();
//   const { gender: urlGender, category: urlCategory } = useParams<{ gender: string, category: string }>(); 

//   useEffect(() => {
//     dispatch(fetchDataContentful());
//   }, [dispatch]);

//   console.log(data);

//   if (!data || error) {
//     return <div>Errore caricamento dati</div>;
//   }

//   const filteredData = data.filter((item: ProductJson) => {
//     const [itemGender, itemCategory] = item.category.split("-");
//     return itemGender.toLowerCase() === urlGender && itemCategory === urlCategory;
//   });

//   return (
//     <>
//       <div className="containerCards">
//         {filteredData.map((item: ProductJson) => (
//           <CardPLP
//             key={item.id}
//             id={item.id}
//             category={item.category}
//             title={item.name}
//             description={item.description}
//             price={item.price}
//             image={item.image}
//             alternative={`${item.gender} ${item.category}`}
//           />
//         ))}
//       </div>
//     </>
//   );
// };

// export default ProductAccessories;
