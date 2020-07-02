import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar";
import Card from "./components/card";
import Mainc from "./components/mainc";
import Footerc from "./components/footerc";

function App() {
  return (
    <div>
      <NavBar />
      <Mainc />
      <div class="row">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Footerc />
    </div>
  );
}

export default App;
