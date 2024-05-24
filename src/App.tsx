import { Route, Routes } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { useState } from 'react';
import DefaultDisplay from './layout/DefaultDisplay';
import HeroSection from './pages/HeroSection';
import Register from './pages/Register';
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
            <Route path="/:gender/:category?/:id?" element={<PLP />} />
            <Route path="pdp/:id" element={<ProductDirectPage />} />
            <Route path='/register' element={<Register/>}/>
          </Route>
            <Route path="/cart" element={<Cart />} />
            <Route path="/finalcheck" element={<FinalCheck />} />
        </Routes>
      </IntlProvider>
    </>
  );
};

export default App;
