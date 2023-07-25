import { useState } from 'react';
import logoVector from '../asset/Vector.png';

function Collapse({ title, text, collapseClass, textClass }) {
   const [CollapseOpen, setCollapseOpen] = useState(false);
   let [ClikCount, setClickCount] = useState(0);

   const handleToggleCollapse = () => {
      setCollapseOpen(!CollapseOpen);
      setClickCount(ClikCount + 1);
   };

   const getAnimationClass = () => {
      if (ClikCount === 1) {
         console.log(1);
         return 'rotate';
      } else if (ClikCount === 2) {
         console.log(2);
         return 'rotateReverse';
      } else if (ClikCount === 3) {
         setClickCount((ClikCount = 1));
         console.log(3);
         return '';
      }
      return '';
   };

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
            <p className="collapse__txt__p">{text}</p>
         </div>
      </div>
   );
}

export default Collapse;

// {CollapseOpen && (
//    <div className={`collapse__txt ${textClass}`}>{text}</div>
// )}
