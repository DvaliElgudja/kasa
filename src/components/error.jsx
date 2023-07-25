import errorImg from '../asset/404.png';

function ErrorPage() {
   return (
      <main className="errorPage">
         <div className="errorPage__img404">
            <img src={errorImg} alt="error 404" />
         </div>
      </main>
   );
}
export default ErrorPage;
