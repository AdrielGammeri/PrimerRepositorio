const Footer = (props) => {
    return(
<footer>
    <div class="holder">
        <div class="Contenedor_Redes">
               <div class="Pos_Redes">
                    <div class="tw">
                        <img  class= "Ft" src="img.css/Img_footer/tw.png" width="100" alt="Icono de Twitter"/> 
                        <a class="Enlace" href="https://twitter.com/adrugammeri"> Twitter</a> 
                    </div>
                    <div class="tw">
                        <img  class= "Ft" src="img.css/Img_footer/ig.png" width="100" alt="Icono de Twitter"/>
                        <a class="Enlace" href="https://www.instagram.com/adrigammeri/?hl=es-la"> Instagram</a> 
                    </div>
               </div>
               <div class="Pos_footer">
                  <p>Pagina diseñada por Adriel Gammeri.</p>
               </div>
        </div>
        <img class="flyer2" src="img.css/flyer3.png" alt="ART symbol"/>
    </div>
</footer>
    )
}
export default Footer;