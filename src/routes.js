import React from "react";
import { Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import ErrorPage from "./components/ErrorPage";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import RestaurantDetails from "./pages/RestaurantDetails";

const Router = () => {
  return (
   <div className="px-2">
       <Routes>
      <Route path="/" element={<Body />} />
      <Route path="/about" element={<About />} />
      {/* <Route path="/contact/mycontact" element={<MyContact />}  /> */}
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/restaurant/:id" element={<RestaurantDetails />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
   </div>
  );
};

export default Router;
