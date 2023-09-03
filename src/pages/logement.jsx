import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Collapse from '../components/collapse';
import Carousel from '../components/carousel';
import starActive from '../asset/star-active.png';
import starDisabled from '../asset/starDiasabled.png';

function Logement({ data }) {
   const { id } = useParams();
   const navigate = useNavigate();
   let result = data.find((item) => item.id === id);

   useEffect(() => {
       if (!result) {
           navigate('/Error404');
       }
   }, [result, navigate]);

   if (!result) return null; // Return null if result is not found to prevent further rendering


   const [firstName, lastName] = result.host.name.split(' ');
   let starRating = parseInt(result.rating);
   let starDiasabledCount = 5 - starRating;
   console.log(starDiasabledCount, 'ddd');

   const activeStars = [];
   for (let i = 0; i < starRating; i++) {
      activeStars.push(
         <li key={i} className="starActive">
            <img src={starActive} alt="étoile reçu" />
         </li>
      );
   }

   const disabledStars = Array.from(
      { length: starDiasabledCount },
      (_, index) => (
         <li key={index} className="starDisabled">
            <img src={starDisabled} alt="étoile non reçu" />
         </li>
      )
   );

   return (
      <div className="logement">
         <Carousel array={result} />
         <div className="logement__container">
            <div className="logement__container__header">
               <div className="logement__container__header__title">
                  <h2 key={result.title}>{result.title}</h2>
                  <h3 key={result.location}>{result.location}</h3>
               </div>
               <ul className="logement__container__header__tags">
                  {result.tags.map((item, index) => (
                     <li
                        className="logement__container__header__tags__li"
                        key={index}
                     >
                        {item}
                     </li>
                  ))}
               </ul>
            </div>
            <div className="logement__container__aside">
               <div className="logement__container__aside__profile">
                  <div className="logement__container__aside__profile__h3">
                     <h3 key={result.host.name}>
                        {firstName}
                        <br />
                        {lastName}
                     </h3>
                  </div>
                  <div className="logement__container__aside__profile__img">
                     <img
                        src={result.host.picture}
                        key={result}
                        alt="profile"
                     />
                  </div>
               </div>
               <div className="logement__container__aside__star">
                  <ul className="logement__container__aside__star__container">
                     {activeStars}
                     {disabledStars}
                  </ul>
               </div>
            </div>
         </div>
         <div className="logement__collapse">
            <Collapse
               title={'Description'}
               text={result.description}
               collapseClass={'logement__collapse__description'}
               textClass={'description'}
            />
            <Collapse
               title={'Equipement'}
               text={
                  <ul className="logement__collapse__equipement__ul">
                     {result.equipments.map((item, index) => (
                        <li key={index}> {item} </li>
                     ))}
                  </ul>
               }
               collapseClass={'logement__collapse__equipement'}
               textClass={'equipments'}
            />
         </div>
      </div>
   );
}
export default Logement;

// ______________________________________



// Ce code présente le composant Logement qui est probablement utilisé pour afficher les détails d'un logement spécifique. Explorons le pas à pas :

// Imports:

// React, { useEffect }: Importe React et le hook useEffect.
// useParams, useNavigate: Deux hooks de react-router-dom. useParams récupère les paramètres de l'URL, tandis que useNavigate fournit une fonction pour naviguer programmativement.
// Divers composants et actifs: Le code importe des composants Collapse et Carousel, ainsi que des images pour les étoiles de notation.
// Décomposition et Logique du Composant:

// const { id } = useParams();: Récupère l'identifiant du logement de l'URL.

// const navigate = useNavigate();: Obtient la fonction navigate pour naviguer vers d'autres routes.

// let result = data.find((item) => item.id === id);: Cherche dans les données le logement correspondant à l'ID récupéré.

// L'effet (useEffect) vérifie si le logement avec l'ID spécifié a été trouvé. Si ce n'est pas le cas, l'utilisateur est redirigé vers une page d'erreur /Error404.

// if (!result) return null;: Si result est nul, le rendu est interrompu pour éviter les erreurs.

// Affichage des Étoiles de Notation:

// L'étoile active est affichée pour le nombre de fois égal à la note du logement.

// L'étoile désactivée est affichée pour combler la différence jusqu'à 5 étoiles.

// Rendu JSX:

// Le code affiche un carrousel, probablement d'images liées au logement.

// Il y a une structure pour le titre, l'emplacement, les tags, l'image de l'hôte, son nom, et la notation par étoiles.

// Deux composants Collapse sont utilisés pour afficher la description et les équipements du logement.

// Exportation:

// Le composant Logement est exporté pour être utilisé dans d'autres parties de l'application.
// Résumé: Le composant Logement récupère l'ID d'un logement de l'URL, trouve le logement correspondant dans les données fournies, et rend les détails du logement, y compris un carrousel, la description, les équipements, et une notation par étoiles. Si un logement avec l'ID donné n'est pas trouvé, l'utilisateur est redirigé vers une page d'erreur.