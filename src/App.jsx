import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Container from "./Container";


const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Container />} />
        
        
      </Routes>
    </div>
  );
};

export default App;
