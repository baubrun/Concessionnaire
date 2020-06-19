import Loader from "react-loader-spinner";

import React from "react";

const Spinner = () => {
  return (
    <div 
    className="spinner d-flex justify-content-center align-items-center">
      <Loader
        type="Bars"
        color="#ff3c38"
        height={200}
        width={200}
      />
    </div>
  );
};

export default Spinner;
