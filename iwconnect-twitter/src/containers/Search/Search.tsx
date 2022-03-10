import React from "react";
import SearchInput from "../Search/Components/SearchInput";

export const Search = () => {
  return (
    <nav
      className="col-3"
      style={{
        display: "flex",
        // overflowY: "scroll",
        flexDirection: "column",
        justifyItems: "center",
        // height: "800px",
      }}
    >
      <SearchInput />
    </nav>
  );
};
