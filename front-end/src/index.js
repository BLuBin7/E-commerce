import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Header from "./components/Header";
import Home from "./components/Home";
import Signin from "./components/Signin";
import Dashboard from "./components/admin/dashboard";
import AdminDashboard from "./components/admin/dashboard";
import PrivateRoute from "./components/PrivateRoute";
import Product from "./components/admin/Product";
import AllProducts from "./components/admin/allProducts";
import ProductDetails from "./components/admin/ProductDetails";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* component trước sẽ là cha(sẽ đc vẫn giữ lại khi bị thay đổi) */}
        <Route path="/" element={<App />}>
          {/* <Route path="/home" element={<Home/>} /> */}
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/addproduct" element={<Product />} />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path="/products/:productId" element={<ProductDetails/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
