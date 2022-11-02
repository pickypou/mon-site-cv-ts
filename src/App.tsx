import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Header } from "./components/header/Header";
import { Competences } from "./components/competences/Competence";

function App() {
  return (
    <div className="App">
     <Navbar />
      <Header />
      <Competences />
    </div>
  );
}

export default App;
