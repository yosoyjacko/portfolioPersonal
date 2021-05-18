import '../../styles/StyleCv.scss'
import IMG1 from '../../img/foto8.jpg'

export default function Marketing() {

    return (
        <>  
            <div className="container-cv">
                <div className="content-cv">               
                <h1 className="tittle">
                        <span className="lead-1">PODES DESCARGAR</span>
                    </h1>
                    <h1 className="tittle">
                        <span className="lead lead-2">MI <strong className="red-text">CURRICULUM VITAE</strong></span>
                    </h1>
                    <h1 className="tittle">
                        <span className="lead lead-3">CLICKEANDO <strong className="red-text">EN LA IMAGEN</strong></span>
                    </h1>
                    <h1 className="tittle">
                        <span className="lead lead-4">AQUI AL LADO</span>
                    </h1>
                    <div className="content-330">
                        <p className="home-text no-margin-bottom">
                            Tambien podes contactarme a travez de mis redes:
                        </p>
                        <p>linkedin - github - email</p>
                    </div>
                </div>  
            </div>
            <div className='cv-image'>
                <div className="content-cv-image">
                    <img src={IMG1} alt="" />

                </div>
            </div>
        </>
    )
}