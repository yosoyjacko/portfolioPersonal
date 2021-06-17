import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    MobileIcon,
    Icono
} from './NavbarElements.jsx'
import '../styles/NavBar3.scss'


const NavBar3 = ({toggle}) => {
    
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <Icono />
                </NavLink>
                <MobileIcon >
                    <Bars  onClick={toggle}/>
                </MobileIcon>
                
                <NavMenu>
                    <NavLink to="/Sobre-mi" activeStyle>
                        Sobre mi
                    </NavLink>
                    <NavLink to="/cv" activeStyle>
                        CV
                    </NavLink>
                    <NavLink to="/trabajos" activeStyle>
                        Proyectos
                    </NavLink>
                    <NavLink to="/Certificados" activeStyle>
                        Certificados
                    </NavLink>
                    <NavLink to="/Contacto" activeStyle>
                        Contacto
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}

export default NavBar3;