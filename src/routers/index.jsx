import { Routes, Route } from "react-router-dom";
import Home from "../page/Home";
import Order from "../page/Order";
export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Order" element={<Order />} />
    </Routes>
  );
}
