import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import OurProcess from './components/OurProcess';
import Industries from './components/Industries';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChatbotsAgents from './components/AIChatbotsAgents';
import ContentAutomation from './components/ContentAutomation';
import AIWebDevelopment from './components/AIWebDevelopment';
import ContactUs from './components/ContactUs';
import RegulatorBot from './components/HESFBot';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<><Hero /><Services /><OurProcess /><WhyChooseUs /><Industries /><Contact /></>} />
        <Route path="/ai-chatbots-agents" element={<AIChatbotsAgents />} />
        <Route path="/content-automation" element={<ContentAutomation />} />
        <Route path="/ai-web-development" element={<AIWebDevelopment />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/hesf-bot" element={<RegulatorBot />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
