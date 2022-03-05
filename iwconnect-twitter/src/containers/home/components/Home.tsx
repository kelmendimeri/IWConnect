import React from "react";
import { Main } from "./Main";
import { Navbar } from "./Navbar";
import { Search } from "./Search";

export const Home = () => {
  return (
    <div className="row" style={{ margin: "5px" }}>
      <Navbar />
      <Main />
      <Search />
    </div>
  );
};
