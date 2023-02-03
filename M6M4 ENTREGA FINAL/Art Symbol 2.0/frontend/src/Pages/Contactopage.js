import React from "react";
import { useState } from 'react';
import axios from 'axios';
import "../Styles/contacto.css";

const Contactopage = (props) =>{
    const initialForm = {
        nombre:'',
        email:'',
        telefono:'',
        mensaje:''
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
        const response = await
        axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false){
            setFormData(initialForm)
        }
    }

    return(
        <div class="ContCont">
        <div class="contact_form">
            <div class="formulario">      
              <h1 class="H1C">Formulario de contacto</h1>
                  <form action="/contacto" method="post" onSubmit={handleSubmit} class="formulario">       
                        <p class="PC">
                          <label for="nombre" class="colocar_nombre">Nombre
                            <span class="obligatorio">*</span>
                          </label>
                            <input type="text" name="nombre" id="nombre" required="obligatorio" placeholder="Escribe tu nombre" value={formData.nombre} onChange={handleChange}/>
                        </p>
    
                        <p class="PC">
                          <label for="email" class="colocar_email">Email
                            <span class="obligatorio">*</span>
                          </label>
                            <input type="email" name="email" id="email" required="obligatorio" placeholder="Escribe tu Email" value={formData.email} onChange={handleChange}/>
                        </p>
                    
                        <p class="PC">
                          <label for="telefone" class="colocar_telefono">Teléfono
                          </label>
                            <input type="tel" name="telefono" id="telefono" placeholder="Escribe tu teléfono" value={formData.telefono} onChange={handleChange}/>
                        </p>    
                        <p class="PC">
                          <label for="mensaje" class="colocar_mensaje">Mensaje
                            <span class="obligatorio">*</span>
                          </label>                     
                            <textarea name="mensaje" class="texto_mensaje" id="mensaje" required="obligatorio" placeholder="Deja aquí tu comentario..." value={formData.mensaje} onChange={handleChange}></textarea> 
                        </p>                    
                        <button type="submit" name="enviar_formulario" id="enviar"><p class="Enviar">Enviar</p></button>
                         {sending ? <p> Enviando. . . </p> : null}
                         {msg ? <p>{msg}</p> : null}  
                  </form>
            </div>  
          </div>
        </div>
    )
}
export default Contactopage;