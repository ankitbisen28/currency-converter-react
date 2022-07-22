import React from "react";

export const ListCurrency = ({convertedAmount}) => {
  return (
    <div className="container mt-3">
      <h2 className="text-center">Converted Currency</h2>
      <div className="d-flex justify-content-center align-item-center my-5">
        <h1 className="text-primary">{convertedAmount}</h1>
      </div>
    </div>
  );
};
