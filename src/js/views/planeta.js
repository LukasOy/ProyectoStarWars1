import React, { useState, useEffect, useContext } from "react";
import { LongCards } from "../component/cards";

import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";



export const Planeta = () => {

	const {store}=useContext(Context)

    return(
        <div className="container">
			<h1> soy planetas</h1>
				<div className="row">
					{store.Planeta.map((objeto, index)=>{
						return <LongCards
                 titulo={objeto.name}
				 id={objeto.uid}
				ruta={"/detalle/planet/"  + objeto.uid}
				button="información" 
                /> })} 
				
				</div>
				

		</div>
    )
	
};