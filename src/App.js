import NavBar1 from "./components/NavBar1";
import  "./styles/styles.scss"
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
        <Route path='portfolioPersonal/' exact component={Home} />
        <Route path='portfolioPersonal/sobre-mi' exact component={SobreMi} />
        
        <Route path='portfolioPersonal/mi-cv' exact component={MiCv} />
        <Route path='portfolioPersonal/proyectos' exact component={Proyectos} />
        <Route path='portfolioPersonal/Certificados' exact component={Cursos} />
      </Switch>
    </Router>
  );
}

export default App;
