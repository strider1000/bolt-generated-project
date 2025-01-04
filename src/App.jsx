import React from 'react';
    import Hero from './components/Hero';
    import Services from './components/Services';
    import WhyChooseUs from './components/WhyChooseUs';
    import OurProcess from './components/OurProcess';
    import Industries from './components/Industries';
    import CaseStudies from './components/CaseStudies';
    import Contact from './components/Contact';
    import Blog from './components/Blog';
    import Footer from './components/Footer';

    function App() {
      return (
        <>
          <Hero />
          <Services />
          <WhyChooseUs />
          <OurProcess />
          <Industries />
          <CaseStudies />
          <Contact />
          <Blog />
          <Footer />
        </>
      );
    }

    export default App;
