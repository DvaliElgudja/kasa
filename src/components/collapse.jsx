import { useState } from 'react';
import logoVector from '../asset/Vector.png';

function Collapse({ title, text, collapseClass, textClass }) {
   const [CollapseOpen, setCollapseOpen] = useState(false);
   let [ClickCount, setClickCount] = useState(0);

   const handleToggleCollapse = () => {
      setCollapseOpen(!CollapseOpen);
      setClickCount(ClickCount + 1);
   };

   const getAnimationClass = () => {
      if (ClickCount === 1) {
         console.log(1);
         return 'rotate';
      } else if (ClickCount === 2) {
         console.log(2);
         return 'rotateReverse';
      } else if (ClickCount === 3) {
         setClickCount((ClickCount = 1));
         console.log(3);
         return '';
      }
      return '';
   };

//    const getAnimationClass = () => {
//       switch (ClickCount % 3) {
//           case 1:
//               return 'rotate';
//           case 2:
//               return 'rotateReverse';
//           default:
//               return '';
//       }
//   };
  

   return (
      <div className={`collapse ${collapseClass}`}>
         <div className="collapse__header">
            <h2>{title}</h2>
            <img
               onClick={handleToggleCollapse}
               src={logoVector}
               alt="logo Vector"
               className={`collapse__header__logo 
               ${getAnimationClass()} `}
            />
         </div>
         <div
            className={`collapse__txt ${textClass} ${
               CollapseOpen ? 'collapse__txt__open' : 'collapse__txt__close'
            }`}
         >
            <div className="collapse__txt__p">{text}</div>
         </div>
      </div>
   );
}

export default Collapse;

// {CollapseOpen && (
//    <div className={`collapse__txt ${textClass}`}>{text}</div>
// )}








// Ce code définit un composant React appelé Collapse. Ce composant permet d'afficher ou de masquer un contenu (souvent appelé "contenu repliable" ou "accordion") lorsqu'on clique sur son titre. En plus de cela, une animation est effectuée sur une icône lors de chaque clic.

// Imports:

// useState: Il s'agit d'un hook React pour gérer l'état local d'un composant.
// logoVector: Une image (probablement une flèche ou un signe plus/moins) qui sert d'indicateur pour montrer si le contenu est actuellement affiché ou masqué.
// Décomposition des Props:

// Le composant accepte quatre props : title, text, collapseClass, et textClass.
// Logique du Composant:

// CollapseOpen: Un état booléen pour suivre si le contenu est actuellement affiché ou masqué.

// ClickCount: Un état qui compte le nombre de fois que l'utilisateur a cliqué sur l'icône.

// handleToggleCollapse: Une fonction qui inverse l'état de CollapseOpen chaque fois qu'elle est appelée, et incrémente également ClickCount.

// getAnimationClass: Cette fonction détermine la classe d'animation à appliquer à l'icône en fonction de la valeur de ClickCount. Le code original envisage trois états (rotate, rotateReverse et ''), et remet à zéro le compteur après trois clics. Une version optimisée de cette fonction est également proposée en commentaires, qui utilise l'opérateur modulo % pour déterminer l'état de rotation sans avoir besoin de remettre le compteur à zéro.

// Rendu JSX:

// L'en-tête du contenu repliable contient le titre et l'icône. L'icône a une classe qui dépend de la valeur retournée par getAnimationClass().

// Le contenu repliable (text) est affiché ou masqué en fonction de la valeur de CollapseOpen. Cela est déterminé par les classes CSS collapse__txt__open et collapse__txt__close.

// Une version commentée propose une autre façon de gérer l'affichage du contenu en utilisant une condition de rendu (CollapseOpen && ...).

// Exportation:

// Le composant Collapse est exporté pour être utilisé ailleurs dans l'application.
// Résumé: Le composant Collapse est un simple mécanisme d'accordion. Lorsque l'utilisateur clique sur l'en-tête, le contenu s'affiche ou se masque, et l'icône change d'aspect pour indiquer l'état actuel. L'animation ou la rotation de l'icône dépend du nombre de fois que l'utilisateur a cliqué dessus.