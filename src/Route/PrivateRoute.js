
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddCategory from "../Pages/Postlogin/Category/AddCategory";
import Categorylist from "../Pages/Postlogin/Category/Categorylist";
import Addcoupon from "../Pages/Postlogin/Coupon/Addcoupon";
import Addcustomer from "../Pages/Postlogin/Customer/Addcustomer";
import Customer from "../Pages/Postlogin/Customer/Customer";
import Gallerylist from "../Pages/Postlogin/Gallery/Gallerylist";
import Home from "../Pages/Postlogin/Home";
import SideBar from "../Pages/Postlogin/Nav/SideBar";
import OrderList from "../Pages/Postlogin/Order/OrderList";
import Addproduct from "../Pages/Postlogin/Product/Addproduct";
import ProductList from "../Pages/Postlogin/Product/ProductList";
import Transaction from "../Pages/Postlogin/Transaction/Transaction";

const PrivateRoute = () => {
  return (
    <>
      <Router>
        <SideBar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/productlist" element={<ProductList />} />
            <Route path="/product/Addproduct" element={<Addproduct />} />
            <Route path="/order/orderList" element={<OrderList />} />
            <Route path="/customer/customer" element={<Customer />} />
            <Route path="/customer/addcustomer" element={<Addcustomer />} />
            <Route path="/category/categorylist" element={<Categorylist />} />
            <Route path="/category/addcategory" element={<AddCategory/>} />
            <Route path="/gallery/gallerylist" element={<Gallerylist/>} />
            <Route path="/transaction/transactionlist" element={<Transaction/>} />
            <Route path="/coupon/addcoupon" element={<Addcoupon/>} />

            <Route path="*" element={<> not found</>} />
          </Routes>
        </SideBar>
      </Router>
    </>
  );
};

export default PrivateRoute;
