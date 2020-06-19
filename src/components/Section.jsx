import React from "react";


const Section = (props) => {
  return (
    <section className="points py-5" id={props.id}>
      <div className="container">
        <div className="row mb-5">
          <div className="col d-flex flex-wrap text-uppercase justify-content-center">
            <h1 className="font-weight-bold align-self-center mx-1">
              {props.text1}
            </h1>
            <h1 className="section-title-special mx-1">{props.text2}</h1>
          </div>
        </div>
        <div className="row">
          {props.children}
        </div>
      </div>
    </section>
  );
};

export default Section;
