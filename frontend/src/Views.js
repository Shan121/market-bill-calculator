import { Routes, Route } from "react-router-dom";
import BillResult from "./components/BillResult";
import ParentComp from "./components/ParentComp";

const Views = () => {
  return (
    <Routes>
      <Route index element={<ParentComp />} />
      <Route path='/result' element={<BillResult />} />
      <Route path='*' element={<div>404 Not Found!</div>} />
    </Routes>
  );
};
export default Views;
