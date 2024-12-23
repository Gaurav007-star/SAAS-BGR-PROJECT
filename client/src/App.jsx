import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/Result";
import BuyCredit from "./pages/BuyCredit";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-slate-100">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Result" element={<Result />} />
        <Route path="/buy" element={<BuyCredit />} />
      </Routes>
    </div>
  );
}

export default App;
