import { Fragment, useState } from 'react';

import './../styles/Formulario.scss'

const Formulario = () => {
    const [datos, setDatos] = useState({
        nombre: '',
        apellido: ''
    })

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault();

    }

    return (
        <Fragment>
            <div className="contenedor-inputs">
                <div className="contacto-wrapper animated bounceInUp">
                    <div className="contacto-form">
                        <h3>Contactame</h3>
                        <form onSubmit={enviarDatos}>
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
                                        name= 'mensaje'
                                        onChange={handleInputChange}
                                        />
                                </p>
                                <button type="submit">Enviar</button>
                        </form>
                    </div>
                    <div className="contact-info">
                        <h4>Mas Info</h4>
                        <ul>
                            <li><i class="fas fa-map-marker-alt"></i> Buenos Aires, Argentina</li>
                            <li><i class="fas fa-phone"></i> (011) 1562010257 </li>
                            <li><i class="fas fa-envelope-open-text"></i> jorge_a.correa@hotmail.com</li>
                        </ul>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolores temporibus aliquid. Dolores porro delectus maxime iste sequi. Nulla perferendis quod temporibus ea iure optio quis officia, eos dolores cum!</p>
                        <p>Lorem, ipsum.</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export default Formulario;