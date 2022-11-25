import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import BillResult from "./components/BillResult";
import ParentComp from "./components/ParentComp";

function App() {
  // EmailForm
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  //
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  //BillCalc
  const [inputFare, setInputFare] = useState("");
  const [inputCommission, setInputCommission] = useState("");
  const [inputLabour, setInputLabour] = useState("");
  //
  const [fare, setFare] = useState("");
  const [commission, setCommission] = useState("");
  const [labour, setLabour] = useState("");
  const [clerkFee, setClerkFee] = useState(0);
  const [marketFee, setMarketFee] = useState("");
  const [totalExpense, setTotalExpense] = useState("");
  const [bidPrice, setBidPrice] = useState("");
  //
  const [grossPayment, setGrossPayment] = useState("");
  const [netPayment, setNetPayment] = useState("");
  //
  const [basketWeightList, setBasketWeightList] = useState([
    { basketWeight: "" },
  ]);
  const [currentWeight, setCurrentWeight] = useState(0);
  const [totalWeight, setTotalWeight] = useState(0);
  const [totalBaskets, setTotalBaskets] = useState(0);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <ParentComp
                name={name}
                setName={setName}
                //
                inputFare={inputFare}
                setInputFare={setInputFare}
                inputCommission={inputCommission}
                setInputCommission={setInputCommission}
                inputLabour={inputLabour}
                setInputLabour={setInputLabour}
                //
                fare={fare}
                setFare={setFare}
                commission={commission}
                setCommission={setCommission}
                labour={labour}
                setLabour={setLabour}
                clerkFee={clerkFee}
                setClerkFee={setClerkFee}
                marketFee={marketFee}
                setMarketFee={setMarketFee}
                totalExpense={totalExpense}
                setTotalExpense={setTotalExpense}
                setSubject={setSubject}
                setMessage={setMessage}
                basketWeightList={basketWeightList}
                setBasketWeightList={setBasketWeightList}
                currentWeight={currentWeight}
                setCurrentWeight={setCurrentWeight}
                totalWeight={totalWeight}
                setTotalWeight={setTotalWeight}
                totalBaskets={totalBaskets}
                setTotalBaskets={setTotalBaskets}
                bidPrice={bidPrice}
                setBidPrice={setBidPrice}
                //
                grossPayment={grossPayment}
                setGrossPayment={setGrossPayment}
                netPayment={netPayment}
                setNetPayment={setNetPayment}
                //
                loading={loading}
                setLoading={setLoading}
                success={success}
                setSuccess={setSuccess}
                error={error}
                setError={setError}
              />
            }
          />
          <Route
            path='/result'
            element={
              <BillResult
                name={name}
                //
                fare={fare}
                commission={commission}
                labour={labour}
                clerkFee={clerkFee}
                marketFee={marketFee}
                totalExpense={totalExpense}
                grossPayment={grossPayment}
                netPayment={netPayment}
                //
                bidPrice={bidPrice}
                totalBaskets={totalBaskets}
                totalWeight={totalWeight}
              />
            }
          />
          <Route path='*' element={<div>404 Not Found!</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
