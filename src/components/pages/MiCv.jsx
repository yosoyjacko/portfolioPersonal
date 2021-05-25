import '../../styles/StyleCv.scss'
import IMG1 from '../../img/foto3.jpg'
import LINKEDIN from '../../img/linkedin.png'
import GITHUB from '../../img/github.png'
import CV from '../../img/CV_Correa,Jorge.pdf'

export default function Marketing() {

    return (
        <>  
            <div className="container-cv">
                <div className="content-cv">               
                <h1 className="tittle-cv">
                        <span className="span-tittle">Si queres contactarme</span>
                    </h1>
                    <h1 className="tittle-cv">
                        <span className="lead lead-2">acá te dejo mi CV,</span>
                    </h1>
                    <h1 className="tittle-cv">
                        <span className="lead lead-3">Clickeando en la </span>
                    </h1>
                    <h1 className="tittle-cv">
                        <span className="lead lead-4">imagen lo descargas</span>
                    </h1>
                    <div className="text-cv">
                        <p className="text-cv">
                            Tambien podes contactarme a travez de mis redes:
                        </p>
                        <div className="iconos-redes">
                            <a href="http://linkedin.com/in/jorge-correa-44881a157" target="_blank" rel="noopener noreferrer"><img className="redes" src={LINKEDIN} alt="" /> </a>
                            <a href="http://github.com/yosoyjacko" target="_blank" rel="noopener noreferrer"><img className="redes" src={GITHUB} alt="" /></a>
                            
                        </div>
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