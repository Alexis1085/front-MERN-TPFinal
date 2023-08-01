import { Link } from 'react-router-dom';
import LailaImage from '../Laila-image.jpeg';
import './styles/styles.css';

const Home = () => {
  return (
    <>
      <header className="header">
        <Link to="/admin">
          <button type="button" className="button">Acceder como Administrador</button>
        </Link>
        <div className="container">
          <div className="imageContainer main">
            <img src={LailaImage} alt="Dra. Laila Tasat" className="main image"/>
          </div>
          <div>
            <h2>Hola! Soy la Dra. Laila Tasat</h2>
            <p>Soy Cardióloga Infantil y aquí podrás obtener un turno conmigo</p>
          </div>
        </div>
      </header>
      {/* <h2>Obtenga un turno con la Dra. Tasat</h2> */}
      <div className="turnosContainer">
        <div className="dias">

        </div>
      </div>
    </>
  )
}

export default Home;