import React from 'react';
import HomeGallery from '../components/homeGallery';
import data from '../data/data.json';
import homeBannerImg from '../asset/homeBannerImg.png';

function Home() {
   return (
      <>
         <div className="home__banner">
            <div className="home__banner__img">
               <img src={homeBannerImg} alt="bord de mer avec falaise" />
            </div>
            <div className="home__banner__text__container">
               <h2 className="home__banner__text__container__h2">
               Chez vous,<span className="responsive-break"></span> partout et ailleurs
               </h2>
            </div>
         </div>
         <HomeGallery data={data} />;
      </>
   );
}
export default Home;






// passons en revue ce code.

// Imports:
// javascript
// Copy code
// import React from 'react';
// import HomeGallery from '../components/homeGallery';
// import data from '../data/data.json';
// import homeBannerImg from '../asset/homeBannerImg.png';
// React: Importation standard de la bibliothèque React.
// HomeGallery: C'est un composant importé depuis le fichier homeGallery dans le répertoire components. On peut supposer que ce composant affiche une galerie d'éléments ou d'images basée sur des données qu'il reçoit.
// data: C'est une importation des données depuis un fichier JSON nommé data.json dans le répertoire data. Ces données seront probablement utilisées pour alimenter le composant HomeGallery.
// homeBannerImg: C'est une image importée depuis le dossier asset.
// Composant Home:
// javascript
// Copy code
// function Home() {
//    return ( ... );
// }
// C'est le composant fonctionnel Home. Lorsqu'il est rendu, il affiche les éléments suivants :

// Une bannière (home__banner) contenant :
// Une image de bannière (avec l'alt décrivant une scène "bord de mer avec falaise").
// Un conteneur de texte avec un titre h2. Le titre utilise une combinaison de texte normal et d'une balise span nommée responsive-break. Cette dernière pourrait être utilisée pour gérer les sauts de ligne ou d'autres ajustements de style pour différents écrans ou résolutions.
// Le composant HomeGallery qui est rendu en dessous de la bannière. Il reçoit les données importées du fichier JSON comme propriété.
// Fragment React (<> ... </>) :
// La balise fragment <> ... </> est une fonctionnalité de React qui permet de regrouper plusieurs éléments sans avoir à ajouter un nœud DOM supplémentaire. Dans ce cas, il englobe la bannière et le composant HomeGallery.

// Exportation:
// javascript
// Copy code
// export default Home;
// Le composant Home est exporté pour être utilisé dans d'autres parties de l'application.

// Résumé: Le code définit un composant Home qui, lorsqu'il est rendu, affiche une bannière avec une image et un titre. Sous cette bannière, il y a une galerie (probablement d'images ou d'articles) rendue par le composant HomeGallery. Le composant HomeGallery utilise des données importées d'un fichier JSON pour afficher son contenu.