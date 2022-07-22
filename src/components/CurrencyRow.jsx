import React from "react";

export const CurrencyRow = ({ handleAmount, handleFrom, handleTo, handleConvert}) => {
  return (
    <>
      <div className="container">
        <div className="form-group">
          <h2 className="text-primary my-3 text-center mb-3">Converter</h2>
          {/* Amount  */}
          <div className="form-floating mb-3">
            <input
              type="number"
              className="form-control"
              id="amount"
              onChange={handleAmount}
              placeholder="Amount"
            />
            <label htmlFor="floatingPassword">Amount</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="from"
              onChange={handleFrom}
              placeholder="From"
            />
            <label htmlFor="floatingPassword">From</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="to"
              onChange={handleTo}
              placeholder="To"
            />
            <label htmlFor="floatingInput">To</label>
          </div>

          <button
            onClick={handleConvert}
            type="button"
            className="btn btn-primary"
          >
            Convert
          </button>
        </div>
      </div>
    </>
  );
};
