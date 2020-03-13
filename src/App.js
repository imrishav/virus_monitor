import React from "react";
import logo from "./logo.svg";
import Stats from "./components/Stats";
import Country from "./components/Country";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1 style={{ paddingBottom: 20, textAlign: "center" }}>
        <span className="title">Corona Monitor</span>
      </h1>

      <Country />
      <h4 style={{ paddingBottom: 20, textAlign: "center" }}>
        <span className="title">Total Cases So Far</span>
      </h4>
      <Stats url="https://covid19.mathdro.id/api" />
      <div style={{ textAlign: "center" }} className="mt-3">
        <span className="footer">
          Developed By{" "}
          <span style={{ textDecoration: "underline" }}>Rishav Sinha</span>
        </span>
      </div>
    </div>
  );
}

export default App;
