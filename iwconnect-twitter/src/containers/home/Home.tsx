import { Navbar } from "../Navbar/Navbar";
import * as React from "react";
import { Search } from "../Search/Search";
import Routes from "src/state/Routes";

function Home() {
  return (
    <div className="row" style={{ margin: "5px" }}>
      <Navbar />
      <Routes />
      <Search />
    </div>
  );
}

export default Home;
