import "./App.css";
import { useState } from "react";
import { CurrencyRow } from "./components/CurrencyRow";
import { ListCurrency } from "./components/ListCurrency";

function App() {


  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const [amount, setAmount] = useState();
  const [convertedAmount, setConvertedAmount] = useState();

  var myHeaders = new Headers();
  myHeaders.append("apikey", "ThEYABcCVTbDhf2xA1nZuxCEKj9IBN2v");

  var requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };

  const handleAmount = (e) => {
    setAmount(e.target.value)
  }
  const handleFrom = (e) => {
  setFrom(e.target.value)
  }
    
  const handleTo = (e) => {
    setTo(e.target.value)
  }
  const handleConvert = (e) => {
    e.preventDefault();
    fetch(
      `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setConvertedAmount(result.result))
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <div className="d-flex container">
        <CurrencyRow handleAmount={handleAmount} handleFrom={handleFrom} handleTo={handleTo} handleConvert={handleConvert}/>
        <ListCurrency convertedAmount={convertedAmount} />
      </div>
    </>
  );
}

export default App;
