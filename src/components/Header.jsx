import React from 'react';
    import { Link } from 'react-router-dom'; // Import Link
    import '../index.css';

    function Header() {
      return (
        <header>
          <div className="container">
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li className="dropdown">
                  <span>Services</span>
                  <ul className="dropdown-menu">
                    <li><Link to="/ai-chatbots-agents">AI Chatbots & Agents</Link></li>
                    <li><Link to="/content-automation">Content Automation</Link></li>
                    <li><Link to="/ai-web-development">AI Web Development</Link></li>
                  </ul>
                </li>
                <li><Link to="/hesf-bot">Regulator Bot</Link></li>
                <li><Link to="/contact-us">Contact</Link></li>
              </ul>
            </nav>
          </div>
        </header>
      );
    }

    export default Header;
