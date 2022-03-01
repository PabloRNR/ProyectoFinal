import React, { useState } from 'react';
import axios from 'axios';
import '../styles/components/pages/ContactoPage.css'
const ContactoPage = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value //forma dinamica
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)

        //const response = await axios.post('http://localhost:3000/api/contacto', formData);
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/contacto`, formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }

    return (
        // <div>ContactoPage</div>
        <section className="holder">
            <div className="columna left">
                <h2>Suscríbete para recibir más notificaciones</h2>
                <form action="/contacto" method="post" className="formulario" onSubmit=
                    {handleSubmit} >
                    <p>
                        {/* <label for="">Nombre</label> */}
                        <input placeholder="Nombre" type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                    </p>
                    <p>
                        {/* <label for="">Email</label> */}
                        <input placeholder="Email" type="email" name="email" value={formData.email} onChange={handleChange} />
                        {/* revisar el type del mail !!! */}
                    </p>
                    <p>
                        {/* <label for="">Teléfono</label> */}
                        {/* <input placeholder="Teléfono" type="text" name=""/> */}
                        {/* le cambie el name de "input" a "telefono" fijarse si siguen funcionando los estilos , sino volver a name="input" y volver a modificar el estilo"*/}
                        <div className="input-icono">
                            <input type="text" name="telefono" placeholder="Teléfono" value={formData.telefono} onChange={handleChange} />
                        </div>
                    </p>
                    <p>
                        {/* <label for="comentario">Mensaje</label> */}
                        <textarea placeholder="Comentario" name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                    </p>
                    <p className="acciones">
                        <input type="submit" value="Enviar"></input>
                    </p>
                    {sending ? <p>Enviando...</p> : null}
                    {msg ? <strong>{msg}!!!!</strong> : null}
                </form>




            </div>
            <div className="columna right">
                <h2>Nuestras redes sociales</h2>
                {/* <p>Síguenos ....</p> */}
                <div></div>

                <ul>
                    <li><a href="https://www.instagram.com/MovieStuff"><img width="30" heigth="30" src="img/contacto/instagram.png" /> https://www.instagram.com/MovieStuff</a></li>
                    <li><a href="https://www.facebook.com/Movie.Stuff.188"><img width="30" heigth="30" src="img/contacto/facebook.png" /> https://www.facebook.com/Movie.Stuff.188</a></li>
                    <li><a href="https://twitter.com/MovieStuff"><img width="30" heigth="30" src="img/contacto/twitter.png" /> https://twitter.com/MovieStuff</a></li>
                </ul>
            </div>
        </section>
    );
}


export default ContactoPage;