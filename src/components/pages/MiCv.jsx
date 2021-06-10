import '../../styles/StyleCv.scss'
import IMG1 from '../../img/foto3.jpg'


export default function Marketing() {

    return (
        <>  
            <div className='cv-image'>
                <div className="content-cv-image">
                    <img className="cv-imagen" src={IMG1} alt="" />
                </div>
            </div>
        </>
    )
}