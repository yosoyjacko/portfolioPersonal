import '../../styles/Certification.scss'
import IMG2 from '../../img/foto1.jpg'
import IMG1 from '../../img/foto2.jpg'

export default function Services() {
    return (
        <>
             <div className="container-certification">
                <div className="content-certification">
                  <div className="card">
                      <div className="imgBox">
                        <img src={IMG2} alt="" />
                        <img src={IMG1} alt="" />
                      </div>
                      <div className="details">
                          <div className="content">
                              <h2>Lorem, ipsum<br /></h2>
                              <h2 className="algo">Lorem, ipsum</h2>
                          </div>
                      </div>
                  </div>
               
                </div>
            
            </div>
        </>
    )
}