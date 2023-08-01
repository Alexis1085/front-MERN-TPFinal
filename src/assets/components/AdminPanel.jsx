import LailaImage from '../Laila-image.jpeg';
import { Link, NavLink, Outlet } from 'react-router-dom';
import './styles/styles.css';
/* import Agenda from './Agenda.jsx';
import Modulos from './Modulos.jsx';
import Osociales from './Osociales.jsx'; */

const AdminPanel = () => {
  return (
    <>
    <header className="header">
      <Link to="/">
        <button type="button" className="button shut">Cerrar Sesión</button>
      </Link>
      <div className="container">
        <div className="imageContainer">
          <img src={LailaImage} alt="Dra. Laila Tasat" className="short image"/>
        </div>
        <h2>Bienvenida Dra. Tasat a su panel de administración</h2>
      </div>
    </header>
    <nav className="tabBar">
      <ul className="tabsContainer">
          <li>
              <NavLink to="agenda">Mi Agenda</NavLink>
          </li>
          <li>
              <NavLink to="modulos">Mis Módulos</NavLink>
          </li>
          <li>
              <NavLink to="obrassociales">Obras Sociales</NavLink>
          </li>
      </ul>
    </nav>
    <section>
      <Outlet/>
    </section>
    </>
  )
}

export default AdminPanel;