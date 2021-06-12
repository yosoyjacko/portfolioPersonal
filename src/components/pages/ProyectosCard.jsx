import Card from './Card';
import '../../styles/ProyectoCards.scss';
import foto2 from '../../img/foto2.jpg';



const cards = [
    {
        id: 1,
        tittle: 'foto1',
        image: foto2,
        content:"esta es la primera foto",
        url: 'https://github.com/yosoyjacko'
    },
    {
        id: 2,
        tittle: 'foto2',
        image: foto2,
        content:"esta es la segunda foto",
        url: 'https://github.com/yosoyjacko'
    },
    {
        id: 3,
        tittle: 'foto3',
        image: foto2,
        content:"esta es la tercera foto",
        url: 'https://github.com/yosoyjacko'
    },
    {
        id: 4,
        tittle: 'foto1',
        image: foto2,
        content:"esta es la cuarta foto",
        url: 'https://github.com/yosoyjacko'
    }
]


const ProyectosCard = () => {
    return(
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    cards.map(card => (
                        <div className="col-md-4 prueba" key={cards.id}>
                            <Card  
                                tittle={card.tittle} 
                                imageSource={card.image}
                                url={card.url}
                                content={card.content}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
};

export default ProyectosCard;