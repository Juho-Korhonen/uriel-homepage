import './App.css';
import { FrontPage } from './components/user/FrontPage';
import { TermsOfService } from './components/user/TermsOfService';
import { PrivacyPolicy } from './components/user/PrivacyPolicy';
import { ContactPage } from './components/user/ContactPage';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { NoPage } from './components/user/404Page';
import ReactGA from 'react-ga';

function App() {
  const TRACKING_ID = "G-NGEWW65RHE"
  ReactGA.initialize(TRACKING_ID)
  return (
    <HashRouter basename={"/"}>
      <Routes>
        <Route path="/etusivu" element={<FrontPage />} />
        <Route path="/yhteydenotto" element={<ContactPage />} />
        <Route path="/kayttoehdot" element={<TermsOfService />} />
        <Route path="/tietosuoja" element={<PrivacyPolicy />} />
        <Route path="*" element={<NoPage/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;