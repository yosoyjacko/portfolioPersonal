import {
    Nav,
    NavLink,
    Bars,
    NavMenu
} from './NavbarElements.jsx'

const NavBar3 = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1>home</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/Sobre-mi" activeStyle>
                        Sobre mi
                    </NavLink>
                    <NavLink to="/Mi-CV" activeStyle>
                        Mi-CV
                    </NavLink>
                    <NavLink to="/Proyectos" activeStyle>
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