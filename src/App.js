import NavBar1 from "./components/NavBar1";
import styles from "./styles/styles.scss"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import SobreMi from './components/pages/SobreMi'
import Contacto from './components/pages/Contacto'
import MiCv from './components/pages/MiCv'
import Proyectos from './components/pages/Proyectos'
import Cursos from './components/pages/Cursos'
import AlgoMas from './components/pages/AlgoMas'
import Navbar2 from "./components/Navbar2";

function App() {
  return (
    <Router>
      <NavBar1 />
      <Navbar2 />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/sobre-mi' exact component={SobreMi} />
        <Route path='/contacto' exact component={Contacto} />
        <Route path='/mi-cv' exact component={MiCv} />
        <Route path='/proyectos' exact component={Proyectos} />
        <Route path='/cursos' exact component={Cursos} />
        <Route path='/algo-mas' exact component={AlgoMas} />
      </Switch>
    </Router>
  );
}

export default App;
