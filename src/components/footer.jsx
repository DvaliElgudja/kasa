import React from 'react';
import kasaLogoFooter from '../asset/LOGOBlack.png';

function Footer() {
   return (
      <footer>
         <div className="footer__container">
            <div>
               <img src={kasaLogoFooter} alt="kasa logo" />
            </div>
            <div className="footer__container__text">
               <h4>© 2020 Kasa.</h4>
               <h4> All rights reserved</h4>
            </div>
         </div>
      </footer>
   );
}

export default Footer;




// This is a simple footer component for a React application:

// Imports:

// kasaLogoFooter: This is likely an image of a black logo, as deduced from the path ../asset/LOGOBlack.png.
// Component Logic:

// There's no specific state or effect logic in this component. It's a stateless functional component.
// Rendered JSX:

// A footer element contains a container (div with a class of footer__container).
// Within this container:
// The imported kasaLogoFooter image is displayed with an alt-text of "kasa logo".
// A div with the class footer__container__text houses two h4 elements. The first h4 says "© 2020 Kasa." and the second says "All rights reserved".
// Export:

// The component Footer is being exported for use elsewhere in the application.
// Observations:

// The component is pretty straightforward, rendering a fixed footer with a logo and a copyright message.

// Given the year is hardcoded as "2020", one might consider making this dynamic so the year updates automatically. For instance, you can use new Date().getFullYear() to get the current year.

// Summary:
// The Footer component provides a basic footer structure for a React application, displaying a logo and some copyright information. It's a stateless and pure presentation component.