import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./containers/home/components/Home";
import ButtonClass from "./components/Button/ButtonClass";

function App() {
  return (
    <div
      className="container-fluid"
      style={{ background: "red", height: "100vh" }}
    >
      <div className="row">
        <div
          className="container"
          style={{ background: "blue", height: "100vh" }}
        >
          {/*application goes here*/}
          <Home />
          <ButtonClass
            backgroundColor={"yello"}
            name="Button"
            textColor="blue"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
