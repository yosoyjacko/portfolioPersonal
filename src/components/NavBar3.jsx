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