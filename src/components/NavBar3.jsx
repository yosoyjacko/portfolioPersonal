import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    MobileIcon,
    Icono
} from './NavbarElements.jsx'



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
                    <NavLink to="/Mi-CV" activeStyle>
                        CV
                    </NavLink>
                    <NavLink to="/Proyectos" activeStyle>
                        Proyectos
                    </NavLink>
                    <NavLink to="/trabajos" activeStyle>
                        trabajos
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