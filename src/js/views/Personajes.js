
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react";
import { Cards } from "../component/cards";
import { LongCards } from "../component/cards";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const Personajes = () => {

    const {store}=useContext(Context)
  const { id } = useParams();
  const [Personajes, setPersonajes] = useState({});

  useEffect(() => {
    fetch("https://www.swapi.tech/api/people/" + id)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPersonDetalle(data.result);
      })
      .catch((error) => console.log(error));
  }, []);

    return (
    /* 
    <div className="text-center mt-5">
            <h1> Personajes </h1>
             <LongCards img="..." titulo="aqui va un personaje" info="este es su info "/>
            <Cards titulo="Atras" ruta="/" boton="Volver atrás"/>
 
    </div> */
    <>
    <div className="container">
        <div className="row">
          <div className="col">
            <img src="https://static.wikia.nocookie.net/esstarwars/images/7/71/PhaseICloneTrooper2-Fathead.png/revision/latest/scale-to-width-down/266?cb=20170914014705" />
          </div>
          <div className="col">
           <h1>{Personajes?.properties?.name}</h1>
            <p>{Personajes?.descripcion} </p>
          </div>
        </div>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Height</th>
      <th scope="col">Mass</th>
      <th scope="col">Hair color</th>
      <th scope="col">Skin color</th>
	  <th scope="col">Eye color</th>
	  <th scope="col">Birth year</th>
	  <th scope="col">Gender</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{Personajes?.properties?.height}</th>
      <td>{Personajes?.properties?.mass}</td>
      <td>{Personajes?.properties?.hair_color}</td>
      <td>{Personajes?.properties?.skin_color}</td>
      <td>{Personajes?.properties?.eye_color}</td>
      <td>{Personajes?.properties?.birth_year}</td>
      <td>{Personajes?.properties?.gender}</td>    
	  </tr>
  </tbody>
</table>
      </div>
      <Cards titulo="Atras" ruta="/" boton="Volver atrás"/>
    </>
    )
}; 