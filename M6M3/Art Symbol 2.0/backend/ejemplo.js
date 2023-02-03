/////////////////////////////////////////////////////////////////////////////////////////////////////////
//Envio de mail

// router.post('/contacto', async (req, res) =>{
//     const mail = {
//         to: 'adrielgammeri@outlook.com',
//         subject: 'Contacto web',
//         html: `${req.body.nombre} se contacto a traves de la web y quiere
//         mas informacion a este correo:
//         ${req.body.email} <br> Ademas, se hizo el siguiente comentario:
//         ${req.body.mensaje} <br> Su telefono es:
//         ${req.body.telefono}`
//     }
//     const transport = nodemailer.createTransport({
//         host: process.env.SMTP_HOST,
//         port: process.env.SMTP_PORT,
//         auth: {
//             user: process.env.SMTP_USER,
//             pass: process.env.SMTP_PASS
//         }
//     }); //cierre de transp

//     await transport.sendMail(mail)

//     res.status(201).json({
//         error: false,
//         message: 'Mensaje Enviado'
//     });

// });

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState } from 'react';
// import axios from 'axios';

// const ContactoPage = (props) => {
//     const initialForm = {
//         nombre:'',
//         email:'',
//         telefono:'',
//         mensaje:''
//     }

//     const [sending, setSending] = useState(false);
//     const [msg, setMsg] = useState('');
//     const [formData, setFormData] = useState(initialForm);

//     const handleChange = e => {
//         const { name, value } = e.target;
//         setFormData(oldData => ({
//             ...oldData,
//             [name]: value //forma dinamica
//         }));
//     }

//     const handleSubmit = async e => {
//         e.preventDefault();
//         SetMsg('');
//         setSending(true)
//         const response = await
//         axios.post('http://localhost:3000/api/contacto', formData);
//         setSending(false);
//         setMsg(response.data.message);
//         if (response.data.error === false){
//             setFormData(initialForm)
//         }
//     }
// }

////////////////////////////////////////////////////////////////////////////////////////

{/* <form action="submeter-formulario.php" method="post">       
<p class="PC">
  <label for="nombre" class="colocar_nombre">Nombre
    <span class="obligatorio">*</span>
  </label>
    <input type="text" name="introducir_nombre" id="nombre" required="obligatorio" placeholder="Escribe tu nombre" value={formData.nombre} onChange={handleChange}/>
</p>
<p class="PC">
  <label for="email" class="colocar_email">Email
    <span class="obligatorio">*</span>
  </label>
    <input type="email" name="introducir_email" id="email" required="obligatorio" placeholder="Escribe tu Email" value={formData.email} onChange={handleChange}/>
</p>
<p class="PC">
  <label for="telefone" class="colocar_telefono">Teléfono
  </label>
    <input type="tel" name="introducir_telefono" id="telefono" placeholder="Escribe tu teléfono" value={formData.telefono} onChange={handleChange}/>
</p>      
<p class="PC">
  <label for="mensaje" class="colocar_mensaje">Mensaje
    <span class="obligatorio">*</span>
  </label>                     
    <textarea name="introducir_mensaje" class="texto_mensaje" id="mensaje" required="obligatorio" placeholder="Deja aquí tu comentario..." value={formData.mensaje} onChange={handleChange}></textarea> 
</p> 
{sending ? <p> Enviando. . . </p> : null}
{msg ? <p>{msg}</p> : null}                   
<button type="submit" name="enviar_formulario" id="enviar"><p class="Enviar">Enviar</p></button>
</form> */}

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// @echo off
// heroku config | findstr CLEARDB > config.txt
// set /p url=<config.txt 

// set "string=%url:?=" & set "x=%"
// set "x=%string:/=" & set "dbname=%"
// echo DB name: %dbname%
// echo DB name: %dbname% >> config.txt

// set "x=%string:@=" & substring "substring=%"
// set "host=%substring:/=" & set "x=%"
// echo Host: %host%
// echo Host: %host% >> config.txt

// set "x=%string::=" & set "substring=%"
// set "password=%substring:@=" & set "x=%"
// echo Password: %password%
// echo Password: %password% >> config.txt

// set "x=%string//=" & set "substring=%"
// set "user=%substring::=" & set "x=%"
// echo User: %user%
// echo User: %user% >> config.txt

// mysql -u %user% -p%password% -h %host% -D %dbname% < %1


/////////////////////////////////////////////////////////////////////////////////////////////////

// REACT_APP_API_URL=http://localhost:3000
// PORT=3001

/////////////////////////////////////////////////////////////////////////////////////////////////

// "scripts":{
//     "start": "env-cmd -f .env react-scripts start",
//     "build": "react-scripts build",
//     "test": "react-scripts test",
//     "eject": "react-scripts eject"
// },


//////////////////////////////////////////////////////////////////////////////////////////////////

// const cargarNovedades = async() => {
//     setLoading(true);
//     const response = await axios.get (`${process.env.REACT_APP_API_URL}/api/novedades`);
//     setNovedades(response.data);
//     setLoading(false);
// };



