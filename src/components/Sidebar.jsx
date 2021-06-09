import { Link } from 'react-router-dom'
import { SidebarConteiner, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarConteiner isOpen={isOpen} onClick={toggle} >
            <Icon >
                <CloseIcon onClick={toggle}/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <Link to="/Sobre-mi">
                        <SidebarLink >Sobre mi</SidebarLink>
                    </Link>
                    <Link to="/Mi-CV" activeStyle>
                        <SidebarLink>Mi-CV</SidebarLink>
                    </Link>
                    <Link to="/Proyectos" activeStyle>
                        <SidebarLink>Proyectos</SidebarLink>
                    </Link>
                    <Link to="/Certificados" activeStyle>
                        <SidebarLink>Certificados</SidebarLink>
                    </Link>
                    <Link to="/Contacto" activeStyle>
                        <SidebarLink>Contacto</SidebarLink>
                    </Link>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarConteiner>
    )
}

export default Sidebar;