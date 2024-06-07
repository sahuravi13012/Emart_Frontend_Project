import React from "react";
import { Routes, Route } from "react-router-dom";
import Privateroute from "./Pages/Privateroute";
import ProtectPages from "./ProtectPages";
import "./App.css";
import Login from "./Auth/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Privateroute Component={ProtectPages} />} />
      </Routes>
    </>
  );
}
 
export default App;
