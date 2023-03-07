import React from "react";
import { Link } from "react";
import { Cards } from "../component/cards";

export const Planetas = () => {

    const {store, action}= useContext(Context)

    return (

    
		<div className="container">
			<h1> Planetas</h1>
			<div className="row">
				{store.Character.map((objeto, index)=>{
					return<Cards
					img="https://dlprivateserver.com/wp-content/uploads/2022/08/%C2%BFTerminara-alguna-vez-Star-Wars.jpg"
					titulo={objeto.name}
					id={objeto.uid}
					ruta={"/detalle/character/"+ objeto.uid}
					button="información" />
					} )}
		</div>
		</div>
	)
}


  {/*   <div className="text-center mt-5">
            <h1> Planetas </h1>
            <Cards titulo="Atras" ruta="/" boton="Volver atrás"/>


    </div> 


);*/}