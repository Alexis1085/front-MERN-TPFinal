import LailaImage from '../Laila-image.jpeg';
import { NavLink, Outlet } from 'react-router-dom';
/* import Agenda from './Agenda.jsx';
import Modulos from './Modulos.jsx';
import Osociales from './Osociales.jsx'; */

const AdminPanel = () => {
  return (
    <>
    <header>
      <img src={LailaImage} alt="Dra. Laila Tasat" className="image"/>
      <h2>Bienvenida Dra. Tasat a su panel de administrador</h2>
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