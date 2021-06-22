import Tarjeta from './Card';
import '../../styles/ProyectoCards.scss';
import foto1 from '../../img/Sin título.png';
import foto3 from '../../img/proyecto1.jpg'
import foto4 from '../../img/proyecto4.jpg'
import foto5 from '../../img/proyecto2.jpg'
import foto6 from '../../img/proyecto5.jpg'
import foto7 from '../../img/proyecto7.jpg'


const cards = [
    {
        id: 1,
        tittle: 'Fragancias Salas',
        image: foto1,
        content:"Landing Page realizado para un local de perfumes y fragancias hecho con html, css, y un poco de php.",
        url: 'http://fraganciasalas.com/',
        url2: 'https://github.com/yosoyjacko'
    },
    {
        id: 2,
        tittle: 'Movie-App',
        image: foto3,
        content:"Buscador de peliculas hecho en React.js utilizando la api de themoviedb.",
        url: 'https://yosoyjacko.github.io/movie-app/',
        url2: 'https://github.com/yosoyjacko/movie-app'
    },
    {
        id: 3,
        tittle: 'TreeBank',
        image: foto4,
        content:"Billetera virtual creada como proyecto final para el bootcamp de #SOYHENRY. Se realizo con React native y Expo.",
        url: 'https://drive.google.com/file/d/1ZBBJfk34kLWOKT6QSCeHXc1n09jh6v0S/view',
        url2: 'https://github.com/yosoyjacko/treebank'
    },
    {
        id: 4,
        tittle: 'to do list',
        image: foto5,
        content:"App para crear listas de tareas. creado con React, Redux y Sass. ",
        url: 'https://yosoyjacko.github.io/todo-list/',
        url2: 'https://github.com/yosoyjacko/todo-list'
    },
    {
        id: 5,
        tittle: 'Galeria',
        image: foto6,
        content:"Practica de una simple galeria con html y css puro",
        url: 'https://github.com/yosoyjacko',
        url2: 'https://github.com/yosoyjacko/pruebaFotografo'
    },
    {
        id: 6,
        tittle: 'nuts store',
        image: foto7,
        content:"Eccomerce creado como proyecto final para el bootcamp de #SOYHENRY. Realizado enteramente con el stack PERN.",
        url: 'https://github.com/yosoyjacko',
        url2: 'https://github.com/yosoyjacko/ecommerce-ft07-g13'
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
                                url2={card.url2}
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