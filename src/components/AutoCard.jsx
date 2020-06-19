import React from "react";

const AutoCard = (props) => {
    console.log(props.img);
  return (
    <div className="card auto-card" style={{width: "18rem"}}>
      <img
        className="card-img-top auto-img"
        src={props.src}
        alt=""
      />
      <div className="card-body">
        <div className="auto-info d-flex justify-content-between">
            <div className="card-text auto-text text-uppercase">
                <h6 className="card-title font-weight-bold">
                    {props.marque}
                </h6>
                <h6> {props.modèle}</h6>
            </div>
            <h5 className="card-text align-self-center py-2 px-3">
                <span className="card-text auto-prix">$ {props.prix}</span>
            </h5>
        </div>
      </div>
      <div className="card-footer text-capitalize d-flex justify-content-between">
          <span><i className="fas fa-car">&nbsp;{props.type}</i></span>
          <span><i className="fas fa-gas-pump">&nbsp;{props.litre}</i></span>
          <span><i className="fas fa-cog">&nbsp;{props.trans}</i></span>
      </div>
    </div>
  );
};

export default AutoCard;
