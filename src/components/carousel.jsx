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
