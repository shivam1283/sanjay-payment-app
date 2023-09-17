import { Routes, Route } from "react-router";
import { Login, Payment } from "./Pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/payment" element={<Payment />}></Route>
    </Routes>
  );
}

export default App;
