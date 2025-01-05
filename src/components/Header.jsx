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
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/ai-chatbots-agents">AI Chatbots & Agents</Link></li>
              </ul>
            </nav>
          </div>
        </header>
      );
    }

    export default Header;
