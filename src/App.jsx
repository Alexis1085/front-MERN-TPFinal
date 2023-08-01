import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './assets/components/Home';
import Login from './assets/components/Login';
import AdminPanel from './assets/components/AdminPanel';
import Agenda from './assets/components/Agenda.jsx';
import NuevosTurnos from './assets/components/NuevosTurnos';
import Modulos from './assets/components/Modulos.jsx';
import ListaModulos from './assets/components/ListaModulos';
import NuevoModulo from './assets/components/NuevoModulo';
import ActualizarModulo from './assets/components/ActualizarModulo';
import Osociales from './assets/components/Osociales';
import Footer from './assets/components/Footer';
import './App.css'
import './assets/components/styles/styles.css'


function App() {

  return (
    <BrowserRouter>
      <div className="mainContainer">
        <main>
          <Routes>
            <Route exact path="/" index element={ <Home/> }/>
            <Route exact path="/admin" element={ <Login/> }/>
            <Route exact path="/admin-panel/*" element={ <AdminPanel/> }>
              <Route path="agenda/*" element={ <Agenda/> }>
                <Route exact path="abrir-agenda" element={ <NuevosTurnos/> }/>
              </Route>
              <Route exact path="modulos/*" element={ <Modulos/> }>
                <Route path="" index element={ <ListaModulos/> }/>
                <Route exact path="crear-modulo" element={ <NuevoModulo/> }/>
                <Route exact path="actualizar-modulo" element={ <ActualizarModulo/> }/>
              </Route>
              <Route exact path="obrassociales" element={ <Osociales/> }/>
            </Route>
          </Routes>
        </main>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
