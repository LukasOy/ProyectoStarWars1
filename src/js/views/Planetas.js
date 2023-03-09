import React, { useState, useEffect, useContext } from "react";
import { Link } from "react";
import { Cards } from "../component/cards";
import { LongCards } from "../component/cards";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planetas = () => {

	const { id } = useParams();
	const [planeta, setPlaneta] = useState({});
  
	useEffect(() => {
	  fetch("https://www.swapi.tech/api/planets/" + id)
		.then((response) => response.json())
		.then((data) => {
		  console.log(data);
		  setPlanet(data.result);
		})
		.catch((error) => console.log(error));
	}, []);

    return (

    <>
		<div className="container">
			<h1> Planetas</h1>
			<div className="row">
				
					
			
					<table>
					<thead>
    <tr>
      <th scope="col">Climate</th>
      <th scope="col">Diameter</th>
      <th scope="col">Rotation period</th>
      <th scope="col">Orbitalperiod</th>
	  <th scope="col">Gravity</th>
	  <th scope="col">Population</th>
	  <th scope="col">Terrain</th>
    <th scope="col">Surface water</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{planeta?.properties?.climate}</th>
      <td>{planeta?.properties?.diameter}</td>
	  <td>{planeta?.properties?.rotation_period}</td>
	  <td>{planeta?.properties?.orbital_period}</td>
	  <td>{planeta?.properties?.gravity}</td>
	  <td>{planeta?.properties?.population}</td>
	  <td>{planeta?.properties?.terrain}</td>
    <td>{planeta?.properties?.surface_water}</td>
	  
	  </tr>
  </tbody>
</table>
					<Cards titulo="Atras" ruta="/" boton="Volver atrás"/>
      </div>
		</div>
		
		</>
	)
}


  {/*   <div className="text-center mt-5">
            <h1> Planetas </h1>
            <Cards titulo="Atras" ruta="/" boton="Volver atrás"/>


    </div> 


);*/}