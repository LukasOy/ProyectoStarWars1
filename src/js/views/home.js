import React, { useContext } from "react";
import { Context } from "../store/appContext";
import gg1 from "../../img/gg1.jpg";
import gg2 from "../../img/gg2.jpg";
import gg3 from "../../img/gg3.jpg";
import "../../styles/home.css";
import { Cards } from "../component/cards";

export const Home = () => {
  const { store } = useContext(Context);

  return (
    <div className="container">
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={gg1} className="d-block w-100 " alt="..." />
          </div>
          <div className="carousel-item">
            <img src={gg2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={gg3} className="d-block w-100 " alt="..." />
          </div>
        </div>
      </div>

      <div className="text-center">
        <Cards title="Planetas" ruta="/planetas" boton="Ir" imagen="https://www.eltiempo.com/files/image_1200_680/uploads/2019/05/30/5cefe1834f1f9.jpeg" />
        <Cards title="Personajes" ruta="/personaje" boton="Ir" imagen="https://i0.wp.com/www.lacasadeel.net/wp-content/uploads/2022/04/skywalkersaga.jpeg?resize=1068%2C623&ssl=1" />
      </div> 

    </div>
  );
};
