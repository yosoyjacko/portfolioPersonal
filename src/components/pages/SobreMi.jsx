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
                    <h2 className="aboutMe">About Pancha-El y Kal-El</h2>
                    <div className="banner">
                       
                           {creationBlocks()}
                      
                    </div>
                </div>

            </div>
        </>
    )
}