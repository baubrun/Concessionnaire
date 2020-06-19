import React from "react";
import { Link } from "react-router-dom";

const Point = ({icon, text}) => {
  return (
    <div className="col-sm-6 col-lg-3 text-center my-3">
      <Link className="points-icon p-2" to="#">
        <i className={`fas ${icon} fa-fw`}></i>
      </Link>
      <h6 className="text-uppercase font-weight-bold my-3">{text}</h6>
      <div className="points-underline"></div>
      <p className="w-75 mx-auto text-muted">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, aliquam.</p>
    </div>
  );
};

export default Point;
