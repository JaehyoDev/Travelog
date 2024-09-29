import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./auth/pages/LoginPage";
import SignUpPage from "./auth/pages/SignUpPage";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
