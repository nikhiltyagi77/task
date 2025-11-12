import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Form from "./Pages/Form";
import FormTwo from "./Pages/formtwo";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
          <Route path="/form" element={<Form />}></Route>
          <Route path="/form-2" element={<FormTwo />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
