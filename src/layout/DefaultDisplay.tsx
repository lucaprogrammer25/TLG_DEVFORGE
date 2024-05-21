
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
interface DefaultDisplayProps {
  changeLocale: (newLocale: string) => void;
}

const DefaultDisplay: React.FC<DefaultDisplayProps> = ({changeLocale}) => {
 
  

  return (
    <>
    <Navbar changeLocale={changeLocale} />
    <Outlet/>
    <Footer/>
    </>
  );
};

export default DefaultDisplay;