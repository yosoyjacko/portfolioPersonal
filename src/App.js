import { useState } from 'react';

import "./styles/styles.scss"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import SobreMi from './components/pages/SobreMi'
import Contacto from './components/pages/Contacto'
import CV from './components/pages/MiCv'
import Trabajos from './components/pages/ProyectosCard'
import Cursos from './components/pages/Cursos'
import Sidebar from './components/Sidebar'
import NavBar3 from "./components/NavBar3";

function App() {
    const[isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    };

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Sidebar  isOpen={isOpen} toggle={toggle}/>
      <NavBar3  toggle={toggle}/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/sobre-mi' exact component={SobreMi} />
        <Route path='/cv' exact component={CV} />
        <Route path='/trabajos' exact component={Trabajos} />
        <Route path='/Certificados' exact component={Cursos} />
        <Route path='/Contacto' exact component={Contacto} />        
      </Switch>
    </Router>
  );
}

export default App;
