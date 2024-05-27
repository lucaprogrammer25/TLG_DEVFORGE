import { Route, Routes } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { useState } from 'react';
import DefaultDisplay from './layout/DefaultDisplay';
import Register from './pages/Register';
import HeroSection from './pages/LandingPage/HeroSection';
import PLP from './pages/PLP';
import ProductDirectPage from './pages/ProductDirectPage';
import Cart from './pages/Cart';
import FinalCheck from './pages/FinalCheck';
import messagesInItalian from './translation/it.json';
import messagesInEnglish from './translation/en.json';

const App: React.FC = () => {
  const [locale, setLocale] = useState('it');

  const messages = {
    en: messagesInEnglish,
    it: messagesInItalian,
  }[locale];
  
  const changeLocale = (newLocale: string) => {
    setLocale(newLocale);
  };

  return (
    <>
      <IntlProvider locale={locale} messages={messages} defaultLocale="it">
        <Routes>
          <Route path="/" element={<DefaultDisplay changeLocale={changeLocale} />}>
            <Route path="/" element={<HeroSection />} />
            <Route path='/register' element={<Register/>}/>
            <Route path="/:gender/:category?" element={<PLP />} />
            <Route path="/:gender/:category?/:id" element={<ProductDirectPage />} />
          </Route>
            <Route path="/cart" element={<Cart />} />
            <Route path="/finalcheck" element={<FinalCheck />} />
        </Routes>
      </IntlProvider>
    </>
  );
};

export default App;
