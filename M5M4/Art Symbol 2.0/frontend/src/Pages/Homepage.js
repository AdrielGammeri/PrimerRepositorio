import React from "react";
import "../Styles/home.css";
import Carousel from 'react-bootstrap/Carousel';

const Homepage = (props) => {
  return (
    <div class="holder">
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img.css/Img_Home/Img4.png"
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img.css/Img_Home/Img3.png"
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img.css/Img_Home/Img1.png"
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div class="Cont_Img">
            <div class="Descrip">
                <h2>Bienvenidos</h2>
                <p>Somos referentes a mundial en la enseñanza del Arte y la Historia en lengua de la humanidad. El rigor de sus contenidos avalados por la categoría de sus autores , todos ellos grandes autoridades en cada una de las áreas tratadas de las principales universidades , junto a la diversidad de temas tratados, que abarcan todas las épocas y los principales acontecimientos acaecidos en de cada una de ellas. Hacen de Art symbol una herramienta indispensable para estudiantes y estudiosos de todo el mundo. Art symbol cuenta con más de 150.000 páginas de documentos, cerca de 40.000 imágenes y más de 1.000 vídeos que componen un amplio recorrido por la Historia y el Arte universales. Recibimos más de un millón de visitas mensuales; más de 170 millones de visitantes totales a lo largo de los más de 20 años de presencia de Art symbol en la red.</p>
            </div>
        </div>
    </div>
  );
}
export default  Homepage;