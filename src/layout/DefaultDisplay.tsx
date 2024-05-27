import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/Buttons/ScrollToTop';
interface DefaultDisplayProps {
  changeLocale: (newLocale: string) => void;
}

const DefaultDisplay: React.FC<DefaultDisplayProps> = ({changeLocale}) => {
 
  

  return (
    <>
    <Navbar changeLocale={changeLocale} />
    <div id='blurOutlet'>
    <Outlet/>
    </div>
    <ScrollToTopButton/>
    <Footer/>
    </>
  );
};

export default DefaultDisplay;