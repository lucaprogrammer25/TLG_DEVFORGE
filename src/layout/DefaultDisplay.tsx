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
    <main>
    <div id='blurOutlet'>
    <Outlet/>
    </div>
    </main>
    <ScrollToTopButton/>
    <Footer/>
    </>
  );
};

export default DefaultDisplay;