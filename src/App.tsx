import { Route, Routes } from "react-router-dom";
import DefaultDisplay from "./layout/DefaultDisplay";
import Home from "./pages/Home";
import Carousel from "./components/Carousel/Carousel";
import Buttontmg from "./components/Buttons/ButtonTmg";


const App: React.FC = () => {

    const images = [
  
    "https://www.addlance.com/blog/wp-content/uploads/2019/04/immagini-da-scaricare.jpg",
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
      <h1>Simple Carousel</h1>
      <Carousel  images={images} />
    </div>

    <Buttontmg onClick={handlequesto, ciao}></Buttontmg>

    </>
  );
};

export default App;
 