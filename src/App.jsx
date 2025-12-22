
import './App.css'
import Price_form from './components/Price_form'
import bg from "./assets/img/background.jpg";

function App() {

  return (
    <>
      <img className="img" src={bg} alt="picture of colorful yarn"></img>
      <div className="container">
        <div className="form">
          <Price_form />
        </div>
      </div>
      <footer>
        <p>
          Photo by Karina Lopez:
          https://www.pexels.com/photo/close-up-photo-of-a-crochet-hook-and-colorful-yarns-4601228/
        </p>
      </footer>
    </>
  );
}

export default App
