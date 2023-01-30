//agregar imagenes a las novedades

const { Router } = require("express");

// var fileUpload = require('express-fileupload');

// app.use(fileUpload({
//     useTempFiles: true,
//     tempFileDir: '/tmp'
// }));

/////////////////////////////////////////////////////////////////////////////////
//view/admin/agregar.hbs

//<form action= "/admin/novedades/agregar" method="post" enctype="multipart/form-data"/>

/////////////////////////////////////////////////////////////////////////////////

{/* <div class="form-group">
    <label>Imagen <input type="file" name="imagen" id="imagen"/></label>
</div> */}

/////////////////////////////////////////////////////////////////////////////////
//routes/admin/novedades.js

// var util = require('util');
// var cloudinary = require('cloudinary').v2;

// const uploader = util.promisify(cloudinary.uploader.upload);

// router.post('/agregar', async (req,res,next) =>{
//     try{
//         var img_id = '';
//         if(req.files && Object.keys(req.files).length > 0){
//             imagen = req.files.imagen;
//             img_id = (await uploader(imagen.tempFilePath)).public_id;
//         }

//         if(req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo !=""){

//             await novedadesModel.insertNovedad({
//                 req.body,
//                 img_id
//             });

//             res.redirect('/admin/novedades')
//         }
//     }
// })

///////////////////////////////////////////////////////////////////////////////////////////////

//Mostrar imágenes en el listado del administrador
//routes/admin/novedades.js

// router.get('/', async function(req,res,next ){
//     var novedades = await novedadesModel.getNovedades();

//     novedades = novedades.map(novedad => {
//         if (novedad.img_id){
//             const imagen = cloudinary.image(novedad.img_id, {
//                 width: 100,
//                 height: 100,
//                 crop: 'fill'
//             });
//             return{
//                 novedad,
//                 imagen
//             }
//         }else{
//             return{
//                 novedad,
//                 imagen:''
//             }
//         }
//     });

//     res.render('admin/novedades', {
//         layout: 'admin/layout',
//         usuario: req.session.nombre,
//         novedades
//     });
// });

//////////////////////////////////////////////////////////////////////////////////////////////
//view/admin/novedades.hbs

{/* <tr>
    <th scope="col">#</th>
    <th scope="col">Titulo</th>
    <th scope="col">Imagen</th>
    <th class="text-center" scope="col">Acciones</th>
</tr>

<tr>
    <th scope="row"> {{id}}</th>
    <td>{{titulo}}</td>
    <td>{{{imagen}}}</td>
</tr> */}

//////////////////////////////////////////////////////////////////////////////////////////////
//views/admin/modificar.hbs

{/* <div class= "form-group">
    <p>
        <label>Imagen: <input type="file" name="imagen" id="imagen"/></label>
    </p>
    <p>
    <label><input type="file" name="img_delete" id="img_delete" value= "1"> Eliminar imagen actual?</input></label>
    <input type="hidden" name="img_original" value= "{{novedad.img_id}}"></input>
    </p>
</div> */}

//////////////////////////////////////////////////////////////////////////////////////////////
//routes/admin/novedades.js

// const destroy = util.promisify(cloudinary.uploader.destroy);

// router.post('/modificar', async(req,res,next) => {
//     try{
//         let img_id = req.body.img_original;
//         let borrar_img_vieja = false;
//         if (req.body.img_delete === "1"){
//             img_id = null;
//             borrar_img_vieja = true;
//         } else {
//             if (req.files && Object.keys(req.files).lenght > 0){
//                 imagen = req.files.imagen;
//                 img_id = (await uploader(imagen.tempFilePath)).public_id;
//                 borrar_img_vieja = true;
//             }
//         }

//         if (borrar_img_vieja && req.body.img_original){
//             await (destroy(req.body.img_original));
//         }
//     }
// })

//////////////////////////////////////////////////////////////////////////////////////////////

// var obj = {
//     titulo: req.body.titulo,
//     subtitulo: req.body.subtitulo,
//     cuerpo: req.body.cuerpo,
//     img_id
// }

//////////////////////////////////////////////////////////////////////////////////////////////

//routes/admin/novedades.js

// router.get('/eliminar/:id', async(req, res, next) => {
//     var id = req.params.id;

//     let novedad = await novedadesModel.getNovedadById(id);
//     if (novedad.img_id){
//         await (destroy(novedad.img_id));
//     }

//     await novedadesModel.deleteNovedadesById(id);
//     res.redirect('/admin/novedades')
// });

//////////////////////////////////////////////////////////////////////////////////////////////

//Creación de API Rest

// var cors = require('cors');

//////////////////////////////////////////////////////////////////////////////////////////////

// var apiRouter = require('./routes/api');

// app.use('/api', cors(), apiRouter);

//////////////////////////////////////////////////////////////////////////////////////////////
//routes/api.js

// var express = require('express');
// var router = express.Router();
// var novedadesModel = require('./../models/novedadesModel');

// router.get('/novedades', async function (req,res,next){
//     let novedades = await novedadesModel.getNovedades();

//     res.json(novedades);
// });

///////////////////////////////////////////////////////////////////////////////////////////////
//Manipulación de imágenes

// var express = require('express');
// var router = express.Router();
// var novedadesModel = require('./../models/novedadesModel');
// var cloudinary = require('cloudinary').v2;

// router.get('/novedades', async function (req, res, next){
//     let novedades = await novedadesModel.getNovedades();

//     novedades = novedades.map(novedades =>{
//         if (novedades.img_id){
//             const imagen = cloudinary.url(novedades.img_id, {
//                 width: 960,
//                 height: 200,
//                 crop: 'fill'
//             });
//             return{
//                 novedades,
//                 imagen
//             }
//         } else {
//             return{
//                 novedades,
//                 imagen:''
//             }
//         }
//     });
//     res.json(novedades);
// });

///////////////////////////////////////////////////////////////////////////////////////////////////
//components/novedades/NovedadItem.js

// import React from 'react';

// const NovedadItem = (props) => {
//     const { title, subtitle, imagen, bosy } = props;

//     return(
//         <div className="novedades">
//             <h1>{title}</h1>
//             <h2>{subtitle}</h2>
//             <img src= {imagen}/>
//             <div dangerouslySetInnerHTML={{ __html: body}}/>
//             <hr />
//         </div>
//     );
// }

// export default NovedadItem;

//////////////////////////////////////////////////////////////////////////////////////////////////////
//pages/NovedadesPage.js

// import React, {useState, useEffect} from 'react';
// import axios from 'axios';
// import NovedadItem from '../components/novedades/NovedadItem';

// const NovedadesPage = (props) => {
//     const [loading, setLoading] =useState(false);
//     const [novedades, setLoading] = useState([]);

//     useEffect(() => {
//         const cargarNovedades = async() => {
//             setLoading(true);
//             const response = await axios.get('http://localhost:3000/api/novedades');
//             setNovedades(response.data);
//             setLoading(false);
//         };

//         cargarNovedades();
//     }, []);

//     return(
//         <section className="holder">
//             <h2>Novedades</h2>
//             {loading ? (
//                 <p>Cargando. . .</p>
//             ):(
//                 novedades.map(item => <NovedadItem key={item.id}
//                 title= {item.titulo} subtitle={item.subtitulo}
//                 imagen={item.imagen} body={item.cuerpo} />)
//             )}
//         </section>
//     );
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
