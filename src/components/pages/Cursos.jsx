import '../../styles/Certification.scss'
import IMG2 from '../../img/foto1.jpg'
import IMG1 from '../../img/foto2.jpg'

export default function Services() {
    return (
        <>
             <div className="container-certification">
                <div className="content-certification">
                    <div className="container-card">
                        <div className="card">
                            <div className="face face1">
                                <div className="content-face1">
                                    <img src={IMG2} alt="" />
                                </div>
                            </div>
                            <div className="face face2">
                                <img src={IMG2} alt="" />  
                            </div>
                        </div>
                        <div className="card">
                            <div className="face face1">
                                <div className="content-face1">
                                    <img src={IMG2} alt="" />
                                </div>
                            </div>
                            <div className="face face2">
                                <img src={IMG2} alt="" />
                            </div>
                        </div>
                        <div className="card">
                            <div className="face face1">
                                <div className="content-face1">
                                    <img src={IMG2} alt="" />
                                </div>
                            </div>
                            <div className="face face2">
                                <img src={IMG2} alt="" />
                            </div>
                        </div>
                        <div className="card">
                            <div className="face face1">
                                <div className="content-face1">
                                    <img src={IMG2} alt="" />
                                </div>
                            </div>
                            <div className="face face2">
                                <img src={IMG2} alt="" />
                            </div>
                        </div>           
                    </div>
                </div>
            
            </div>
        </>
    )
}