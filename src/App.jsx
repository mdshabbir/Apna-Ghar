import React from "react";
import Header from "./components/header/Header";
import "./index.css";
import Hero from "./components/hero/Hero";
import "./App.css";
import Companies from "./components/companies/Companies";
import Recidencies from "./components/Recidencies/Recidencies";

const App = () => {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header></Header>
        <Hero />
      </div>
      <Companies />
      <Recidencies />
    </div>
  );
};

export default App;
