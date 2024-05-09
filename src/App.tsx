import { Route, Routes } from 'react-router-dom'
import DefaultDisplay from './layout/DefaultDisplay'
import Home from './pages/Home'
import ProductMen from './pages/ProductMen';
import ProductWoman from './pages/ProductWoman';
import ProductAccessories from './pages/ProductAccessories';
import Login from './pages/Login';
import Cart from './pages/Cart';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultDisplay/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="men" element={<ProductMen/>}/>
        <Route path="woman" element={<ProductWoman/>}/>
        <Route path="accessories" element={<ProductAccessories />} />
        <Route path="login" element={<Login />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    </Routes>
  );
};

export default App;
