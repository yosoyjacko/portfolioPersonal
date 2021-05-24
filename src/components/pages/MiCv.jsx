import '../../styles/StyleCv.scss'
import IMG1 from '../../img/foto3.jpg'
import CV from '../../img/CV_Correa,Jorge.pdf'

export default function Marketing() {

    return (
        <>  
            <div className="container-cv">
                <div className="content-cv">               
                <h1 className="tittle">
                        <span className="lead-1">Si queres</span>
                    </h1>
                    <h1 className="tittle">
                        <span className="lead lead-2">contactarme <strong className="red-text">acá te dejo</strong></span>
                    </h1>
                    <h1 className="tittle">
                        <span className="lead lead-3">mi CV. <strong className="red-text">Clickeando en la imagen</strong></span>
                    </h1>
                    <h1 className="tittle">
                        <span className="lead lead-4">lo descargas</span>
                    </h1>
                    <div className="content-330">
                        <p className="home-text no-margin-bottom">
                            Tambien podes contactarme a travez de mis redes:
                        </p>
                        <p>
                            <a href="http://linkedin.com/in/jorge-correa-44881a157" target="_blank" rel="noopener noreferrer">LinkedIn </a>
                            -
                            <a href="http://github.com/yosoyjacko" target="_blank" rel="noopener noreferrer"> GitHub </a>
                        </p>
                    </div>
                </div>  
            </div>
            <div className='cv-image'>
                <div className="content-cv-image">
                    <a href={CV} download>
                        <img className="cv-imagen" src={IMG1} alt="" />
                    </a>

                </div>
            </div>
        </>
    )
}