import { Route, Routes } from 'react-router-dom'
import DefaultDisplay from './layout/DefaultDisplay'

import HeroSection from './pages/HeroSection';
import Login from './pages/Login';
import PLP from './pages/PLP';
import ProductDirectPage from './pages/ProductDirectPage';


const App: React.FC = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<DefaultDisplay/>}>

        <Route path="/" element={<HeroSection/>}/>

         <Route path="/:gender/:category?/:id?" element={<PLP />} /> {/* il parametro category è opzionale */}
        <Route path="login" element={<Login />} />
        <Route path="pdp/:id" element={<ProductDirectPage />} />
      </Route>
    </Routes>
    </>
  );
};

export default App;
