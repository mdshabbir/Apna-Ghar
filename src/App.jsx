import React from "react";
import Header from "./components/header/Header";
import "./index.css";
import Hero from "./components/hero/Hero";
import "./App.css";
import Companies from "./components/companies/Companies";
import Recidencies from "./components/Recidencies/Recidencies";
import Value from "./components/value/Value";

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
      <Value />
    </div>
  );
};

export default App;
