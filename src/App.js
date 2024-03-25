import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Aboutpage from "./page/Aboutpage";
import Homepage from "./page/Homepage";
import Productpage from "./page/Productpage";
import ProductDetailpage from "./page/ProductDetailpage";
import Loginpage from "./page/Loginpage";
import Userpage from "./page/Userpage";
import { useState } from "react";

function App() {
  const [authenticate, setAuthenticate] = useState(false);

  const PrivateRoute = () => {
    return authenticate ? <Userpage /> : <Navigate to="/login" />;
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/products" element={<Productpage />} />
        <Route path="/products/:id" element={<ProductDetailpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/user" element={<PrivateRoute />} />
      </Routes>
    </div>
  );
}

export default App;
