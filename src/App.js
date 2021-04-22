import NavBar1 from "./components/NavBar1";
import styles from "./styles/styles.scss"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Consulting from './components/pages/Consulting'
import ContactUs from './components/pages/ContactUs'
import Marketing from './components/pages/Marketing'
import Products from './components/pages/Products'
import Services from './components/pages/Services'
import SignUp from './components/pages/SignUp'
import Navbar2 from "./components/Navbar2";

function App() {
  return (
    <Router>
      <NavBar1 />
      <Navbar2 />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/consulting' exact component={Consulting} />
        <Route path='/contact-us' exact component={ContactUs} />
        <Route path='/marketing' exact component={Marketing} />
        <Route path='/products' exact component={Products} />
        <Route path='/services' exact component={Services} />
        <Route path='/sign-up' exact component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
