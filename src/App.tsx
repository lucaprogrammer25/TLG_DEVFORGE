import { Route, Routes } from 'react-router-dom'
import DefaultDisplay from './layout/DefaultDisplay'
import Home from './pages/Home'

function App() {

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
}
export default App;
