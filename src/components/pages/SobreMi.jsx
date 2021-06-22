import './../../styles/SobreMi.scss';

export default function SobreMi() {
    
    
    // function creationBlocks(){
    //     var vuelta = [];
    //     for(var i = 1 ; i < 400; i++){
    //         var x = Math.random()* 5
           
    //         const divStyle = {
    //             animationDuration : 2 + x + 's',
    //             animationDelay: 1 + x + 's'
    //         }
            
    //         function block () {   
    //             return <div className='blocks' style={divStyle}></div>
    //         }
    //         vuelta.push(block())
    //     }
    //     return vuelta        
    // }

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
                        Me presento, soy Jorge Correa, una persona curiosa a la que le encanta la tecnología y seguir descubriendo y capacitandome todos los días. Comunicativo al trabajar 
                        en equipo, aporto nuevas ideas, soluciones creativas y mucha buena onda, para así poder aumentar la productividad y entregar proyectos de gran calidad. <br /> <br />

                        Como desarrollador web fullstack, tengo una fuerte orientacion en el front-end, en especial porque me gusta enfocarme en generar una buena experiencia de usuario. 
                        Busco llevar a cabo proyectos diversos y desafiantes. <br /> <br />

                        Comence (y continuo) este camino de modo autodidacta, y complete un bootcamp de desarrollador fullstack en la plataforma SOYHENRY, 
                        con más de 700hs de prácticas con el stack PERN (PostgreSQL, EXPRESS, React y Node.) 
                        </p>
                    </div>
                    
                </div>

            </div>
        </>
    )
}