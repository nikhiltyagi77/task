import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import List from "./Pages/form-1/list";
import Edit from "./Pages/form-1/edit";
import Form from "./Pages/Form";
import AddForm from "./Pages/form-1/add";
import FormTest from "./Pages/form-1/form-2";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
          <Route path="/add" element={<AddForm />}></Route>
          <Route path="/edit" element={<Edit />}></Route>
          <Route path="/form" element={<Form />}></Route>
          <Route path="/form-2" element={<FormTest />}></Route>
          <Route path="/list" element={<List />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
