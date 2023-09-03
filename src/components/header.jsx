import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from './../asset/LOGO.png';

function Header() {
   // add a class selscted at the click the show a border under
   const [selectedItem, setSelectedItem] = useState(null);
   const handleItemClick = (itemName) => {
      setSelectedItem(itemName);
   };

   return (
      <nav>
         <img src={logo} alt="logo" className="nav__logo"  />
         <ul className="nav__ul">
            <Link to="/">
               <li
                  className={`nav__ul__acceuil 
                  ${selectedItem === 'Acceuil' ? 'selected' : ''}`}
                  onClick={() => handleItemClick('Acceuil')}
               >
                  Acceuil
               </li>
            </Link>
            <Link to="/About">
               <li
                  className={`nav__ul__acceuil 
                  ${selectedItem === 'A Propos' ? 'selected' : ''}`}
                  onClick={() => handleItemClick('A Propos')}
               >
                  A Propos
               </li>
            </Link>
         </ul>
      </nav>
   );
}

export default Header;








// This is the header component for a React application:

// Imports:

// Link: A component from react-router-dom used for client-side navigation.
// useState: A hook from React for creating state inside functional components.
// logo: It's an image presumably of a company or site logo.
// Component Logic:

// The selectedItem state is used to store the name of the clicked navigation item.
// handleItemClick: A function that updates selectedItem with the name of the clicked navigation item.
// Rendered JSX:

// It's wrapped in a nav tag which is semantically appropriate for a site navigation menu.
// The logo is displayed at the beginning of the navigation bar.
// An unordered list (ul) contains two navigation links (Link components from react-router-dom):
// Acceuil (Home): This navigates to the root (/) of the website.
// A Propos (About): This navigates to the /About route of the website.
// Clicking any of these navigation items will invoke handleItemClick, which updates the selectedItem state with the item's name. This in turn conditionally applies the selected class to the item, presumably to show some kind of visual indication (e.g., a highlight or an underline) that it's the currently selected page.
// Styling and Classes:

// Each list item (li) has the base class nav__ul__acceuil. The name of this class seems to indicate it's specifically for the "Acceuil" item, but it's also applied to the "A Propos" item. This might be a naming inconsistency. It would be better to use a more generic name, such as nav__ul__item.
// If the list item corresponds to the currently selected page (as indicated by the selectedItem state), it will also get the selected class applied to it.
// Export:

// The Header component is being exported for use in other parts of the application.
// Suggestions:

// Class Naming: Consider renaming the class nav__ul__acceuil to something more generic like nav__ul__item since it's used for both navigation items.
// Dynamic Navigation Items: If the navigation menu is expected to grow, it would be efficient to dynamically render navigation items from an array or list of route information.
// Active Route Highlighting: Instead of managing the active route with state and click handlers, you could also utilize the NavLink component from react-router-dom, which provides an activeClassName prop to style the link when its route is active.
// Localization: If you're planning on supporting multiple languages, consider setting up a localization strategy to manage translations, instead of hardcoding strings like "Acceuil" and "A Propos".