import * as React from "react";
import NavLink from "./NavLink/NavLink";

function Navbar() {
  return (
    <div
      className="col-3"
      style={{
        backgroundColor: "red",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <NavLink icon={"Hi"} text="Kelmend" />
    </div>
  );
}

export default Navbar;
