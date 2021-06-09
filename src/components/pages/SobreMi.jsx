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
                    <h2 className="aboutMe">¿Querés saber un poco más de mi?</h2>
                    <div className="aboutMe-text">
                        <p className="texto-aboutme">
                        Soy desarrollador web fullstack con fuerte enfoque en el front-end, en especial porque me gusta enfocarme en generar una buena experiencia de usuario. <br /> <br />
                        Hace relativamente poco, tuve la oportunidad de completar un bootcamp de desarrollador fullstack en la plataforma SOYHENRY, con mas de 700hs de prácticas con el stack PERN (PostgreSQL, EXPRESS, React y Node.) <br /> <br />
                        Soy una persona curiosa a la que le encanta la tecnología y seguir descubriendo y capacitandome todos los días. A nivel laboral, considero primordial la comunicación dentro del equipo, y soy capaz de aportar al grupo nuevas ideas, soluciones y mucha buena onda, para así poder aumentar la productividad y entregar proyectos de gran calidad. <br /> <br />
                        Busco llevar a cabo proyectos diversos y desafiantes, para crecer como desarrollador y así continuar avanzando en mi carrera profesional. 
                        </p>
                    </div>
                    
                </div>

            </div>
        </>
    )
}