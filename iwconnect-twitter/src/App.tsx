import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./containers/home/Home";

function App() {
  return (
    <div className="container-fluid" style={{ background: "black" }}>
      <div className="row">
        <div className="container" style={{ color: "white", height: "100vh" }}>
          {/*application goes here*/}
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
