import React from "react";
import { BrowserRouter as Router, Routes, Route, Form } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import List from "./Pages/form-1/list";
import Add from "./Pages/form-1/add";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
          <Route path="/add" element={<Add />}></Route>
          <Route path="/form" element={<Form />}></Route>
          <Route path="/list" element={<List />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
