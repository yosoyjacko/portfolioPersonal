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
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia laborum animi dolores deleniti magni sapiente velit blanditiis ea soluta ratione porro, architecto, doloribus eveniet? Veritatis impedit nisi aspernatur commodi enim?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est eum corporis nobis possimus assumenda doloribus expedita, consectetur a quo hic natus nam fugiat eveniet voluptatibus cum architecto vitae facilis impedit!Lorem
                    lorem
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad illum voluptatum, illo molestiae id corporis praesentium. Placeat, magnam eaque. Repellat nostrum reprehenderit ad voluptates libero, harum praesentium natus adipisci quas!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, natus dolores. A cumque corporis cum ducimus modi. Corporis harum, id totam quia repellat unde. Laborum earum adipisci hic mollitia quaerat saepe dolore molestiae neque possimus autem aperiam voluptate corrupti alias id quasi maxime reprehenderit quod consequatur ex officia, perspiciatis, quo ad. Debitis dolorum repudiandae saepe harum enim, animi consequuntur facere magnam itaque eveniet deserunt eius ullam pariatur. Assumenda eius dignissimos aliquam aperiam iste, eum voluptatem quam? Ipsa ea iusto autem ratione commodi, molestias impedit ipsam. Placeat quaerat rerum tempore, tenetur sequi error illum soluta autem excepturi similique voluptatibus numquam? Voluptates?
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