import React from "react";
import styled from "styled-components";
import SearchInput from "../Search/Components/SearchInput";
import RecomantationPost from "./Components/Recomandation/Recomandation";
import RecomantionFollows from "./Components/Recomandation/RecomandationFollow";

export const Search = () => {
  return (
    <Styled.Container className="col-3">
      <SearchInput />
      <RecomantationPost />
      <RecomantionFollows />
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.nav`
    display: flex;
    flex-direction: column;
    // justify-content: center;
    justify-items: center;

    // border: 1px solid white;
  `,
};
