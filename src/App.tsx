import { Route, Routes } from "react-router-dom";
import DefaultDisplay from "./layout/DefaultDisplay";
import Home from "./pages/Home";
import Carousel from "./components/Carousel/Carousel";

const App: React.FC = () => {
  const pokemonImages = [
    "https://img.pokemondb.net/artwork/large/bulbasaur.jpg",
  ];

  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultDisplay />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>

      <div>
        <h1>Carosello troppo bello</h1>
        <Carousel images={pokemonImages} />
      </div>
    </>
  );
};

export default App;
