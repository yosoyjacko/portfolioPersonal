
import '../../styles/CardStyle.scss'

const Tarjeta = ({tittle, imageSource, url, url2, content}) => {
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
                            - Link a Web -
                        </a> <br />
                        <a href={url2}  target="_blank" rel="noreferrer">
                            - Link a Github -
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Tarjeta;