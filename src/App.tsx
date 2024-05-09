import { Route, Routes } from "react-router-dom";
import DefaultDisplay from "./layout/DefaultDisplay";
import Home from "./pages/Home";
import Carousel from "./components/Carousel/Carousel";

const App: React.FC = () => {
  const images = [
    "https://www.addlance.com/blog/wp-content/uploads/2019/04/immagini-da-scaricare.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMsn79PX_Vz76FA3u0_7dHqa0R9k9aoLfBtw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRut1jY0JTIS0QoIVw5ngeNm4aNU0SkF9oph60t4qSrjg&s",
    "https://static.jojowiki.com/images/thumb/4/4a/latest/20210422070411/Giorno_Giovanna_Infobox_Anime.png/400px-Giorno_Giovanna_Infobox_Anime.png",
    "https://images.pexels.com/photos/19880508/pexels-photo-19880508/free-photo-of-uomo-occhiali-da-sole-parete-muro.jpeg?auto=compress&cs=tinysrgb&w=600",
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
        <Carousel images={images} />
      </div>
    </>
  );
};

export default App;
