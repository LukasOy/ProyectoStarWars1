/* import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#"><img src="https://i.pinimg.com/originals/f0/18/57/f01857e0762a00565bba4fb83097fbdf.jpg" width={50} height={50} /></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
     
    <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Favoritos 
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
    <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <button className=" dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          <p> <i class="fa-solid fa-heart"></i> </p>
          </button>
          <ul className="dropdown-menu dropdown-menu-dark">
            {store.favorites.map((value, index)=>{
				return <li key={index} className="dropdown-item"> {value} 
        <i class="fa-solid fa-trash" onClick={() => { actions.ElimFavor(value.name);
                    }}></i> </li>
			
			})}
          </ul>
        </li>
      </ul>
  </div>
</div>
     
    </div>
  </div>
</nav>
	);
};
 */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/home.css";

export const Navbar = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between" id="myNav">
      <Link to="/">
        <img className="logo" src="https://34.195.119.223/wp-content/uploads/star-wars.png" />
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <button
              className=" dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              onClick={() => actions.AgrFavor(props.title, props.id)}
              title="Add to Favorites"
            >
              <i className="fa-solid fa-heart"></i>
            </button>
            <ul className="dropdown-menu dropdown-menu-dark">
              {store.favorites.map((value, index) => {
                return (
                  <li key={index} className="dropdown-item d-flex justify-content-between">
                    {value}
                    <button className="btn btn-sm btn-outline-danger" onClick={() => actions.ElimFavor(index)}>
                      Eliminar
                    </button>
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};