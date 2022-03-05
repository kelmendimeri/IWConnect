import React from "react";
import DarkBackground from "./Search/DarkBackground/DarkBackground";
import SearchInput from "./Search/SearchInput";

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
      <DarkBackground
        title="Trends for you"
        icon={<i className="bi bi-gear"></i>}
      />
      <DarkBackground title="Who to follow" />
    </nav>
  );
};
