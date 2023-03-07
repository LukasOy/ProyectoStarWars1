import { checkPropTypes } from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

export const Cards = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <img src={props.imagen}></img>
        <Link to={props.ruta}>
        <a href="#" class="btn btn-primary">
          {props.boton}
        </a>
        </Link>
      </div>
    </div>
  );
};
