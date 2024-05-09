import { Route, Routes } from 'react-router-dom'
import DefaultDisplay from './layout/DefaultDisplay'
import HeroSection from './pages/HeroSection';



const App: React.FC = () => {

  return (
    <>

    <Routes>
      <Route path="/" element={<DefaultDisplay/>}>
        <Route path="/" element={<HeroSection/>}/>
        
      </Route>

    </Routes>
    </>
  );
};

export default App;
