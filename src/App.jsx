import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Form1 from "./Pages/form-1/form";
import List1 from "./Pages/form-1/list";
import FormStep from "./Pages/step-form/form";
import ListStep from "./Pages/step-form/list";
import "./App.css"
import { PaginationDyn } from "./Pages/step-form/paginate";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/list-1" element={<List1 />}></Route>
          <Route path="/form-1" element={<Form1 />}></Route>
          <Route path="/step-form" element={<FormStep />}></Route>
          <Route path="/step-list" element={<ListStep />}></Route>
          <Route path="/paginate" element={<PaginationDyn />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
