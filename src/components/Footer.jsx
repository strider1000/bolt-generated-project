import React from 'react';
    import '../index.css';

    function Footer() {
      return (
        <footer>
          <div className="container">
            <p>&copy; {new Date().getFullYear()} Ai Kit Pro. All rights reserved.</p>
          </div>
        </footer>
      );
    }

    export default Footer;
