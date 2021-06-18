import { Fragment, useState } from 'react';
import './../styles/Formulario.scss';

import emailjs from 'emailjs-com';



const Formulario = () => {
    const [datos, setDatos] = useState({
        fullName: '',
        email: '',
        phone: '',
        message: ''
    })

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }


    function enviarEmail(e) {
        e.preventDefault();

        emailjs.sendForm('outlookMessage', 'template_aytc33o', e.target, 'user_MIFr3RxzniGRzG4Bn073i')
          .then((result) => {
              alert('Mensaje enviado XD')
          }, (error) => {
             alert(error.message)
          });
          e.target.reset()

    }

    return (
        <Fragment>
            <div className="contenedor-inputs">
                <div className="contacto-wrapper animated bounceInUp">
                    <div className="contacto-form">
                        <h3>Contactame</h3>
                        <form onSubmit={enviarEmail}>
                                <p>
                                    <label>Nombre Completo</label>
                                    <input 
                                        type="text"
                                        placeholder="Ingrese Nombre y Apellido" 
                                        name = 'fullName'
                                        onChange={handleInputChange}
                                        />
                                </p>
                                <p>
                                    <label>Email</label>
                                    <input 
                                        type="email"
                                        placeholder="Ingrese Email"
                                        name= 'email'
                                        onChange={handleInputChange}
                                        />
                                </p>
                                <p>
                                    <label>Telefono</label>
                                    <input 
                                        type="tel"
                                        placeholder="Ingrese Numero de Telefono"
                                        name= 'phone'
                                        onChange={handleInputChange}
                                        />
                                </p>
                                <p className="block">
                                    <label>Mensaje</label>
                                    <textarea
                                        rows="3" 
                                        type="text"
                                        placeholder="Ingrese un Lindo Mensaje"
                                        name= 'message'
                                        onChange={handleInputChange}
                                        />
                                </p>
                                <button type="submit">Enviar</button>
                        </form>
                    </div>
                    <div className="contact-info">
                        <h4>Mis Redes</h4>
                        <ul>
                            <li><i class="fas fa-map-marker-alt"></i> Buenos Aires, Argentina</li>
                            <li><i class="fas fa-phone"></i> (011) 1562010257 </li>
                            <li><i class="fas fa-envelope-open-text"></i> jorge_a.correa@hotmail.com</li>
                            <li><i class="fab fa-linkedin-in"></i><a href="http://www.linkedin.com/in/jorge-correa-44881a157" target="_blank" rel="noreferrer"> linkedin.com/jorge-correa</a></li>
                            <li><i class="fab fa-github"></i><a href="http://github.com/yosoyjacko" target="_blank" rel="noreferrer"> github.com/yosoyjacko</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export default Formulario;