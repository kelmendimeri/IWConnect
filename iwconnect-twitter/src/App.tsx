import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Navbar } from "./containers/Navbar/Navbar";
import Routes from "./state/Routes";
import { Search } from "./containers/Search/Search";

function App() {
  return (
    <div className="container-fluid" style={{ background: "black" }}>
      <div className="row">
        <div className="container" style={{ color: "white", height: "100vh" }}>
          {/*application goes here*/}
          <Navbar />
          <Routes />
          <Search />
        </div>
      </div>
    </div>
  );
}

export default App;
