import NavBar1 from "./components/NavBar1";
import "./styles/styles.scss"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import SobreMi from './components/pages/SobreMi'

import MiCv from './components/pages/MiCv'
import Proyectos from './components/pages/Proyectos'
import Cursos from './components/pages/Cursos'

import Navbar2 from "./components/Navbar2";

function App() {
  return (
    
    <Router>
      <NavBar1 />
      <Navbar2 />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path='/sobre-mi'  component={SobreMi} />
        <Route exact path='/mi-cv'  component={MiCv} />
        <Route exact path='/proyectos'  component={Proyectos} />
        <Route exact path='/Certificados' component={Cursos} />
      </Switch>
    </Router>
  );
}

export default App;
