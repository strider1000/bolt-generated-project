import React from 'react';
    import '../index.css';

    function Header() {
      return (
        <header>
          <div className="container">
            <nav>
              <ul>
                <li><a href="#hero">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#why-choose-us">Why Choose Us</a></li>
                <li><a href="#our-process">Our Process</a></li>
                 <li><a href="#industries">Industries</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>
          </div>
        </header>
      );
    }

    export default Header;
