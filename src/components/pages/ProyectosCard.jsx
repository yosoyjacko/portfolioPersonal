import Tarjeta from './Card';
import '../../styles/ProyectoCards.scss';
import foto2 from '../../img/foto2.jpg';



const cards = [
    {
        id: 1,
        tittle: 'foto1',
        image: foto2,
        content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel iusto accusantium",
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
    },
    {
        id: 5,
        tittle: 'foto1',
        image: foto2,
        content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel iusto accusantium",
        url: 'https://github.com/yosoyjacko'
    },
    {
        id: 6,
        tittle: 'foto1',
        image: foto2,
        content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel iusto accusantium",
        url: 'https://github.com/yosoyjacko'
    }
]


const ProyectosCard = () => {
    return(
        <div className="container-tarjeta">
            <div className="container-order">
                {
                    cards.map(card => (
                        <div className="prueba" key={cards.id}>
                            <Tarjeta  
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