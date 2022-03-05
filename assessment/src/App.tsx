import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./containers/Home/Components/Home";

function App() {
  return (
    <div
      className="container-fluid"
      style={{ backgroundColor: "#202020", height: "100vh" }}
    >
      <div className="row">
        <div
          className="container"
          style={{ background: "lightblue", height: "100vh" }}
        >
          {/*application goes here*/}
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
