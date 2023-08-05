import React, { useState } from 'react';
import errorImg from '../asset/404.png';
import { Link } from 'react-router-dom';

function ErrorPage() {
   const [selectedItem, setSelectedItem] = useState(null);

   const handleItemClick = (itemName) => {
      setSelectedItem(itemName);
   };

   return (
      <main className="errorPage">
         <div className="errorPage__img404">
            <img src={errorImg} alt="error 404" />
            <div className='errorPage__h3'>
               <h3>Oups! La page que vous demandez n'existe pas.</h3>
            </div>
            <ul className="errorPage__ul">
               <Link to="/" className="errorPage__ul__acceuil" onClick={() => handleItemClick('Acceuil')}>
                  <li className={selectedItem === 'Acceuil' ? 'selected' : ''}>
                     Retourner sur la page d’accueil
                  </li>
               </Link>
            </ul>
         </div>
      </main>
   );
}
export default ErrorPage;
