import React from 'react';
    import Header from './components/Header';
    import Hero from './components/Hero';
    import Services from './components/Services';
    import WhyChooseUs from './components/WhyChooseUs';
    import OurProcess from './components/OurProcess';
    import Industries from './components/Industries';
    import Contact from './components/Contact';
    import Footer from './components/Footer';

    function App() {
      return (
        <>
          <Header />
          <Hero />
          <Services />
          <WhyChooseUs />
          <OurProcess />
          <Industries />
          <Contact />
          <Footer />
        </>
      );
    }

    export default App;
