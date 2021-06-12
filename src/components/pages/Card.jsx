
import BackdropFilter from 'react-backdrop-filter'
import '../../styles/CardStyle.scss'

const Card = ({tittle, imageSource, url, content}) => {
    return (
        <div className="card text-center bg-dark">
            <img src={imageSource} alt="" />
            <div className="card-body text-light">
                <h4 className="card-tittle">
                    {tittle}
                </h4>
                <p className="card-text text-secondary">
                    {content}
                </p>
                <a href={url} className="btn btn-outline-secondary" target="_blank" rel="noreferrer">
                    Link de lo que sea
                </a>
            </div>
        </div>
    )
};

export default Card;