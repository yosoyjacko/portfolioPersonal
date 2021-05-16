import { Link } from 'react-router-dom'
import  './../styles/NavbarHorizontal.scss'


function Navbar2 () {
    return (
        <>
            <nav className='nav-horizontal'>
                <Link to='/' className='nav-left' >
                   Home
                </Link>
                <Link to='/' className='nav-button'>
                    Contacto
                </Link>
                <div className="nav-line"></div>
            </nav>
        </>
    )
}

export default Navbar2