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










// Ce code définit un composant React appelé ErrorPage. Comme son nom l'indique, ce composant est probablement destiné à être affiché lorsqu'une erreur 404 (page non trouvée) se produit.

// Imports:

// useState: Il s'agit d'un hook React pour gérer l'état local d'un composant.
// errorImg: Une image représentant probablement une page d'erreur 404.
// Link: Un composant de react-router-dom qui permet de créer des liens de navigation.
// Etat du Composant:

// selectedItem: L'élément actuellement sélectionné (dans ce cas, il n'y a qu'un seul élément dans la liste, mais cette logique pourrait être étendue pour une liste plus longue).
// Logique du Composant:

// handleItemClick: Une fonction qui définit l'élément actuellement sélectionné. Cela permet d'appliquer un style différent à cet élément.
// Rendu JSX:

// L'image d'erreur est affichée avec son alt-text "error 404".
// Un message d'erreur est affiché indiquant que la page demandée n'existe pas.
// Il y a une liste contenant un lien vers la page d'accueil. Lorsqu'un utilisateur clique sur cet élément, handleItemClick est appelé avec l'argument 'Acceuil'. En conséquence, si selectedItem est égal à 'Acceuil', une classe selected est appliquée à cet élément, ce qui lui donne probablement un style différent.
// Exportation:

// Le composant ErrorPage est exporté pour être utilisé ailleurs dans l'application.
// Observations:

// Il pourrait sembler inutile d'avoir une logique de sélection d'élément pour une liste qui contient un seul élément. Toutefois, si l'intention est d'étendre cette liste à l'avenir, cette logique pourrait être utile.

// Si la liste n'est pas destinée à être étendue, la logique de sélection peut être simplifiée ou supprimée.

// Résumé: Le composant ErrorPage est une page d'erreur simple qui s'affiche lorsqu'une page n'est pas trouvée. Elle contient une image d'erreur, un message indiquant que la page n'a pas été trouvée, et un lien permettant à l'utilisateur de retourner à la page d'accueil.