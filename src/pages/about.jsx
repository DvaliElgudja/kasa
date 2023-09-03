import Collapse from '../components/collapse.jsx';
import aboutImg from '../asset/about__img.png';

let collapse__text = [
   {
      title: 'Fiabilité',
      text: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
   },
   {
      title: 'Respect',
      text: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
   },
   {
      title: 'Service',
      text: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
   },
   {
      title: 'Sécutité',
      text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
   },
];

function About(data) {
   return (
      <div className="about">
         <div className="about__picture">
            <img
               src={aboutImg}
               alt="mountain and forest on about page"
               className="about__picture-img"
            />
         </div>
         <div className="about__main">
            <Collapse
               title={collapse__text[0].title}
               text={collapse__text[0].text}
               collapseClass={'about__main__fiabilite'}
               textClass={'about__main__collapse__fiabilite__text'}
            />
            <Collapse
               title={collapse__text[1].title}
               text={collapse__text[1].text}
               collapseClass={'about__main__collapse__respect'}
               textClass={'about__main__collapse__respect__text'}
            />
            <Collapse
               title={collapse__text[2].title}
               text={collapse__text[2].text}
               collapseClass={'about__main__service'}
               textClass={'about__main__service__text'}
            />
            <Collapse
               title={collapse__text[3].title}
               text={collapse__text[3].text}
               collapseClass={'about__main__securite_text'}
               textClass={'about__main__securite__text'}
            />
         </div>
      </div>
   );
}
export default About;







// passons en revue ce code :

// javascript
// Copy code
// import Collapse from '../components/collapse.jsx';
// import aboutImg from '../asset/about__img.png';
// Imports:

// Collapse: On importe le composant Collapse depuis le fichier collapse.jsx dans le répertoire components. Ce composant est probablement une structure d'élément rétractable/expansible qui affiche le titre et le texte qu'il reçoit en tant que props.
// aboutImg: C'est l'importation d'une image depuis le dossier asset. Cette image sera utilisée plus loin dans le code pour être affichée dans la partie "À propos" (About).
// Déclaration de données:

// javascript
// Copy code
// let collapse__text = [ ... ];
// C'est un tableau d'objets qui contient des informations (titre et texte) qui seront passées au composant Collapse. Chaque objet représente une section distincte de l'élément rétractable.

// Composant About:
// javascript
// Copy code
// function About(data) {
//    return ( ... );
// }
// C'est le composant fonctionnel About. Lorsqu'il est rendu, il affiche plusieurs éléments :

// Une div avec une image (aboutImg). Cette image représente probablement un visuel de fond ou une image représentative pour la page "À propos".

// Une autre div (about__main) qui contient quatre instances du composant Collapse. Chaque instance reçoit des propriétés spécifiques (title, text, collapseClass, textClass) extraites du tableau collapse__text. Ces propriétés permettent d'ajuster le titre, le texte et les classes CSS de chaque instance Collapse.

// À noter : La manière dont les données sont passées au composant Collapse est assez répétitive. Pour de plus grands ensembles de données, ou si ce modèle est susceptible de changer souvent, une boucle ou une méthode de cartographie serait préférable pour générer ces composants.

// Exportation:
// javascript
// Copy code
// export default About;
// Le composant About est exporté pour être utilisé dans d'autres parties de l'application.

// Résumé: Le code définit un composant About qui rend une image et quatre sections rétractables/expansibles avec différents titres et textes. Ces sections sont gérées par le composant Collapse qui est alimenté par des données définies dans le tableau collapse__text.