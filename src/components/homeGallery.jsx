import { Link } from 'react-router-dom';

function HomeGallery({ data }) {
   console.log(data);
   return (
      <div className="home">
         <div className="home__gallery">
            <div className="home__gallery-grid">
               {data.map((item, index) => (
                  <Link to={`/housing/${item.id}`} key={index}>
                     <figure>
                        <img
                           src={item.cover}
                           alt={item.description}
                           className="home__gallery-grid__img"
                        ></img>
                        <figcaption>{item.title}</figcaption>
                     </figure>
                  </Link>
               ))}
            </div>
         </div>
      </div>
   );
}
export default HomeGallery;
