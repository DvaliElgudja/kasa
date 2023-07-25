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
