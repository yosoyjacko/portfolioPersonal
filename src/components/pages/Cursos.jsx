import '../../styles/Certification.scss'
import IMG2 from '../../img/codecademy.png'
import IMG1 from '../../img/FreeCodeCamp.png'
import IMG3 from '../../img/Henry.png'
import IMG4 from '../../img/foto1.jpg'
import IMG5 from '../../img/certificadohenry.jpg'
import IMG6 from '../../img/certificadocodecademy1.jpg'
import IMG7 from '../../img/certificadocodecademy2.jpg'
import IMG8 from '../../img/certificadofreecodecamp.jpg'



export default function Services() {
    return (
        <>
             <div className="container-certification">
                <div className="content-certification">
                    <div className="container-card">
                        <div className="card">
                            <div className="face face1">
                                <div className="content-face1">
                                    <img src={IMG3} alt="" />
                                </div>
                            </div>
                            <div className="face face2">
                                <img src={IMG5} alt="" />  
                            </div>
                        </div>
                        <div className="card">
                            <div className="face face1">
                                <div className="content-face1">
                                    <img src={IMG2} alt="" />
                                </div>
                            </div>
                            <div className="face face2">
                                <img src={IMG6} alt="" />
                            </div>
                        </div>
                        <div className="card">
                            <div className="face face1">
                                <div className="content-face1">
                                    <img src={IMG2} alt="" />
                                </div>
                            </div>
                            <div className="face face2">
                                <img src={IMG7} alt="" />
                            </div>
                        </div>
                        <div className="card">
                            <div className="face face1">
                                <div className="content-face1">
                                    <img src={IMG1} alt="" />
                                </div>
                            </div>
                            <div className="face face2">
                                <img src={IMG8} alt="" />
                            </div>
                        </div>           
                    </div>
                </div>
            
            </div>
        </>
    )
}