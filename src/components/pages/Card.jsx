
import '../../styles/CardStyle.scss'

const Tarjeta = ({tittle, imageSource, url, content}) => {
    return (
        <div className="container">
            <div className="card">
                <div className="imgbx">
                    <img src={imageSource} alt="" />
                </div>
                <div className="contentbx">
                    <div className="content">
                        <h3>
                            {tittle}
                        </h3>
                        <p>
                            {content}
                        </p>
                        <a href={url}  target="_blank" rel="noreferrer">
                            - Link de lo que sea -
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Tarjeta;