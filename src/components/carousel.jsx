import { useState } from 'react';
import logoSlide from '../asset/logoCarousel.png';

const Carousel = ({ array }) => {
   const [activeSlide, setActiveSlide] = useState(0);
   const goToNexSlide = () => {
      setActiveSlide((prevIndex) =>
         prevIndex === array.pictures.length - 1 ? 0 : prevIndex + 1
      );
   };
   const goToPreviousSlide = () => {
      setActiveSlide((prevIndex) =>
         prevIndex === 0 ? array.pictures.length - 1 : prevIndex - 1
      );
   };

   return (
      <div className="logement__carousel">
         <img
            src={array.pictures[activeSlide]}
            alt={array.title}
            className="logement__carousel__img"
         />
         <img
            onClick={goToNexSlide}
            src={logoSlide}
            alt="arrow-right"
            className="arrow-right"
         />
         <img
            onClick={goToPreviousSlide}
            src={logoSlide}
            alt="arrow-left"
            className="arrow-left"
         />
         <p className="logement__carousel__index">
            {`${activeSlide + 1}/ ${array.pictures.length}`}
         </p>
      </div>
   );
};

export default Carousel;










// Ce code définit un composant React appelé Carousel qui est destiné à afficher un carrousel d'images. Décortiquons chaque partie du code pour mieux le comprendre.

// Imports:

// useState: Il s'agit d'un hook React qui permet d'ajouter un état local à un composant fonctionnel.
// logoSlide: Importe une image qui est probablement utilisée comme icône de flèche pour naviguer entre les diapositives du carrousel.
// Décomposition des Props:

// const Carousel = ({ array }) => {...}: Le composant accepte une prop appelée array qui contient probablement des informations et des images relatives au logement.
// Logique du Composant:

// const [activeSlide, setActiveSlide] = useState(0);: C'est l'utilisation du hook useState pour maintenir l'index de la diapositive actuellement affichée dans le carrousel.

// goToNexSlide & goToPreviousSlide: Ces fonctions sont utilisées pour naviguer vers la diapositive suivante ou précédente, respectivement. Si vous êtes à la fin du carrousel et cliquez sur "next", cela vous ramènera à la première diapositive, et inversement, si vous êtes à la première diapositive et cliquez sur "previous", cela vous ramènera à la dernière.

// Rendu JSX:

// L'image actuellement active (déterminée par activeSlide) est affichée.

// Il y a deux icônes d'arrows pour naviguer entre les diapositives. Ces icônes déclenchent les fonctions goToNexSlide et goToPreviousSlide lorsqu'elles sont cliquées.

// Il y a aussi un paragraphe qui affiche l'index de la diapositive actuelle et le nombre total de diapositives. Par exemple, si vous êtes sur la première diapositive d'un carrousel de cinq images, il afficherait "1/5".

// Exportation:

// Le composant Carousel est exporté pour être utilisé ailleurs dans l'application.
// Résumé: Le composant Carousel est un carrousel d'images simple qui affiche une image à la fois et permet à l'utilisateur de naviguer entre elles en utilisant des icônes de flèches. La diapositive actuellement affichée est maintenue dans l'état du composant avec le hook useState.