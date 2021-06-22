import '../../styles/StyleCv.scss'
import IMG1 from '../../img/CV-jorge-correa.jpg'
import IMG2 from '../../img/CV_Correa,Jorge.pdf'


export default function Marketing() {

    return (
        <>  
            <div className='cv-image'>
                {/* <a href={IMG1} download>-Descargar este cv-</a> */}
                <div className="content-cv-image">
                    <img className="cv-imagen" src={IMG1} alt="" />
                </div>
                <div className="flotante">
                    <button className="botonF1">
                        <a href={IMG2} target="_blank" rel="noopener noreferrer" download>Descargar</a>
                    </button>
                </div>
            </div>
        </>
    )
}