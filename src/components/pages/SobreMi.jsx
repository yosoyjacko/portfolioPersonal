import './../../styles/SobreMi.scss';

export default function SobreMi() {
    
    
    function creationBlocks(){
        var vuelta = [];
        for(var i = 1 ; i < 400; i++){
            var x = Math.random()* 5
           
            const divStyle = {
                animationDuration : 2 + x + 's',
                animationDelay: 1 + x + 's'
            }
            
            function block () {   
                return <div className='blocks' style={divStyle}></div>
            }
            vuelta.push(block())
        }
        return vuelta        
    }

    // const section = document.querySelector('content-about-me');
    // setTimeout(function(){
    //     section.classList.add('active')
    // },1000)

    return (
        <>
            <div className="container-about-me">
                <div className='content-about-me'>
                    <h2 className="aboutMe">Querés saber un poco mas de mi?</h2>
                    <div className="aboutMe-text">
                        <p className="texto-aboutme">
                            Soy desarrollador web fullstack con fuerte enfoque en el front-end. <br />
                            Hace relativamente poco tuve la oportunidad de completar un bootcamp de fullstack en la plataforma SOYHENRY con mas de 700hs de practicas con el stack PERN (PostgreSQL, EXPRESS, React y Node.) <br />
                            Soy una persona curiosa a la que le encanta la tecnologia y seguir aprendiendo mas todos los dias, dandole mucha importancia a la comunicacion en el grupo ya que para mi es lo mas importante para ser un mejor desarrollador y asi seguir creciendo como profesional. <br />
                            Me considero capas de aportar al grupo nuevas ideas, soluciones y mucha buena onda para asi poder aumentar la productividad en el equipo y entregar proyectos de gran calidad.
                        </p>
                    </div>
                    <div className="banner">         
                           {creationBlocks()}
                    </div>
                </div>

            </div>
        </>
    )
}