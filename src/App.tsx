import { Route, Routes } from 'react-router-dom'
import DefaultDisplay from './layout/DefaultDisplay'
import Home from './pages/Home'
import ProductDirectPage from './pages/ProductDirectPage';



const App: React.FC = () => {

  return (
    <>

    <Routes>
      <Route path="/" element={<DefaultDisplay/>}>
        <Route path="/" element={<Home/>}/>
        
      </Route>

    </Routes>
    </>
  );
};

export default App;
