import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
//import { Dashboard, Register, Error, Landing } from "./pages";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import Landing from "./pages/Landing";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
