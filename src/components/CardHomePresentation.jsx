import './../styles/Presentation.scss'

function CardHomePresentation () {
    return (
        <>  
            <div className="container">
                <div className="content">
                    <h1 className="tittle">
                        <span className="lead-1">Hello World! </span>
                    </h1>
                    <h1 className="tittle">
                        <span className="lead lead-2">Soy <strong className="red-text">Jorge Correa</strong></span>
                    </h1>
                    <h1 className="tittle">
                        <span className="lead lead-3">El <strong className="red-text">Desarrollador Web</strong></span>
                    </h1>
                    <h1 className="tittle">
                        <span className="lead lead-4">Que estabas buscando</span>
                    </h1>
                    <div className="content-330">
                        <p className="home-text no-margin-bottom">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione aspernatur harum amet qui quae nihil earum! Corrupti
                        </p>
                    </div>
               
                </div>
            
            </div>
        </>
    )
}

export default CardHomePresentation