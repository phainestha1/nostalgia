import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../routes/Home";
import Login from "../routes/Login";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route expact path="/" element={<Home />} />
        <Route expact path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
