import React from "react";
import "../Styles/contacto.css";

const Contactopage = (props) =>{
    return(
        <div class="ContCont">
        <div class="contact_form">
            <div class="formulario">      
              <h1 class="H1C">Formulario de contacto</h1>
                  <form action="submeter-formulario.php" method="post">       
                        <p class="PC">
                          <label for="nombre" class="colocar_nombre">Nombre
                            <span class="obligatorio">*</span>
                          </label>
                            <input type="text" name="introducir_nombre" id="nombre" required="obligatorio" placeholder="Escribe tu nombre"/>
                        </p>
    
                        <p class="PC">
                          <label for="email" class="colocar_email">Email
                            <span class="obligatorio">*</span>
                          </label>
                            <input type="email" name="introducir_email" id="email" required="obligatorio" placeholder="Escribe tu Email"/>
                        </p>
                    
                        <p class="PC">
                          <label for="telefone" class="colocar_telefono">Teléfono
                          </label>
                            <input type="tel" name="introducir_telefono" id="telefono" placeholder="Escribe tu teléfono"/>
                        </p>    
                      
                        <p class="PC">
                          <label for="website" class="colocar_website">Sitio web
                          </label>
                            <input type="url" name="introducir_website" id="website" placeholder="Escribe la URL de tu web"/>
                        </p>    
                      
                        <p class="PC">
                          <label for="asunto" class="colocar_asunto">Asunto
                            <span class="obligatorio">*</span>
                          </label>
                            <input type="text" name="introducir_asunto" id="assunto" required="obligatorio" placeholder="Escribe un asunto"/>
                        </p>    
                      
                        <p class="PC">
                          <label for="mensaje" class="colocar_mensaje">Mensaje
                            <span class="obligatorio">*</span>
                          </label>                     
                            <textarea name="introducir_mensaje" class="texto_mensaje" id="mensaje" required="obligatorio" placeholder="Deja aquí tu comentario..."></textarea> 
                        </p>                    
                      
                        <button type="submit" name="enviar_formulario" id="enviar"><p class="Enviar">Enviar</p></button>
                  </form>
            </div>  
          </div>
        </div>
    )
}
export default Contactopage;