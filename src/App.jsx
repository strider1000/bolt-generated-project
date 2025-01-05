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
import AIChatbotsAgents from './components/AIChatbotsAgents'; // Import the new component

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<><Hero /><Services /><WhyChooseUs /><OurProcess /><Industries /><Contact /></>} />
        <Route path="/ai-chatbots-agents" element={<AIChatbotsAgents />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
