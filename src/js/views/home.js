import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Cards } from "../component/cards";
import { Cards2 } from "../component/cards2";

export const Home = () => (
  <div className="text-center mt-5">
    <Cards title="Planetas" ruta="/planetas" boton="Ir"/>
    <Cards title="Personajes" ruta="/personaje" boton="Ir" />

    
  </div>
);
