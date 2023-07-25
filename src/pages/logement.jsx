import { useParams } from 'react-router-dom';
import Collapse from '../components/collapse';
import Carousel from '../components/carousel';
import starActive from '../asset/star-active.png';
import starDisabled from '../asset/starDiasabled.png';

function Logement({ data }) {
   const { id } = useParams();
   let result = data.find((item) => item.id === id);
   console.log(result);
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
