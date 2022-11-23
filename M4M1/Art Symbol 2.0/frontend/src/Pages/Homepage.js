import React from "react";

const Homepage = (props) => {
    return(
        <div class="holder">
        <div class="Cont_Prin">
            <div id="carouselExampleSlidesOnly" class="carousel_slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="img.css/Img_Home/Img4.png" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src="img.css/Img_Home/Img3.png" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src="img.css/Img_Home/Img1.png" class="d-block w-100" alt="..."/>
                </div>
                </div>
            </div>
        </div>
        <div class="Cont_Img">
            <div class="Descrip">
                <h2>Bienvenidos</h2>
                <p>Somos referentes a mundial en la enseñanza del Arte y la Historia en lengua de la humanidad. El rigor de sus contenidos avalados por la categoría de sus autores , todos ellos grandes autoridades en cada una de las áreas tratadas de las principales universidades , junto a la diversidad de temas tratados, que abarcan todas las épocas y los principales acontecimientos acaecidos en de cada una de ellas. Hacen de Art symbol una herramienta indispensable para estudiantes y estudiosos de todo el mundo. Art symbol cuenta con más de 150.000 páginas de documentos, cerca de 40.000 imágenes y más de 1.000 vídeos que componen un amplio recorrido por la Historia y el Arte universales. Recibimos más de un millón de visitas mensuales; más de 170 millones de visitantes totales a lo largo de los más de 20 años de presencia de Art symbol en la red.</p>
            </div>
        </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
    </div>
    )
}
export default Homepage;