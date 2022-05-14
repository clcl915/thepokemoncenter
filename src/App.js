import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./components/Navbar";
import History from "./History";
import Insights from "./Insights";
import NotFound from "./components/NotFound";
import MlPokemon from "./components/MlPokemon";

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/history" element={<History />} /> */}
          <Route path="/insights" element={<Insights />} />
          {/* <Route path="/ml-pokemon" element={<MlPokemon />} /> */}
          <Route path="*"element={<NotFound/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
