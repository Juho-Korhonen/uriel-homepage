import './App.css';
import { FrontPage } from './components/user/FrontPage';
import { TermsOfService } from './components/user/TermsOfService';
import { PrivacyPolicy } from './components/user/PrivacyPolicy';
import { ContactPage } from './components/user/ContactPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NoPage } from './components/user/404Page';
import ReactGA from 'react-ga4';
import { HelmetProvider } from 'react-helmet-async';

function App() { 
  ReactGA.initialize("G-NGEWW65RHE")
  return (
    <HelmetProvider>
      <BrowserRouter basename={"/"}>
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/etusivu" element={<FrontPage />} />
          <Route path="/yhteydenotto" element={<ContactPage />} />
          <Route path="/kayttoehdot" element={<TermsOfService />} />
          <Route path="/tietosuoja" element={<PrivacyPolicy />} />
          <Route path="*" element={<NoPage/>}/>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;