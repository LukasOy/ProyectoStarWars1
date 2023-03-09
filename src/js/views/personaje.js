import React, { useContext, useEffect } from "react";

import { Context } from "../store/appContext";
import { LongCards } from "../component/cards";
import "../../styles/home.css";

import { useParams } from "react-router-dom";

export const PersonDetalle = () => {
	const {store, action}= useContext(Context)
	
	return (
		<div className="container">
			<h1> Personajes en Detalle</h1>
			<div className="row">
			{store.PersonDetalle.map((objeto, index)=>{
					return<LongCards
					img="https://dlprivateserver.com/wp-content/uploads/2022/08/%C2%BFTerminara-alguna-vez-Star-Wars.jpg"
					titulo={objeto.name}
					id={objeto.uid}
					ruta={"/detalle/persondetalle/"+ objeto.uid}
					button="información" />
				} )}
				
			</div>
		</div>
	)
}