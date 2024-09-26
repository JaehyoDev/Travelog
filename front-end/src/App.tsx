import React from "react";
import { Routes, Route } from "react-router-dom";

import LoginPage from "./auth/pages/LoginPage";
import SignUpPage from "./auth/pages/SignUpPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
