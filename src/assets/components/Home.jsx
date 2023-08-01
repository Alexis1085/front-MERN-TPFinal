import { Link } from 'react-router-dom';
import LailaImage from '../Laila-image.jpeg';

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <img src={LailaImage} alt="Dra. Laila Tasat" className="main image"/>
      <h2>Hola! Soy la Dra. Laila Tasat</h2>
      <p>Soy Cardióloga Infantil y aquí podrás obtener un turno conmigo</p>
      {/* <h2>Obtenga un turno con la Dra. Tasat</h2> */}
      <Link to="/admin">
        <button type="button" className="button">Acceder como Administrador</button>
      </Link>
      <div className="turnosContainer">
        <div className="dias">

        </div>
      </div>
    </>
  )
}

export default Home;