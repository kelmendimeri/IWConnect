import * as React from "react";
import styled from "styled-components";

function SearchInput() {
  return (
    <form>
      <Styled.Container>
        <Styled.IconWrapper
          onClick={() => {
            alert("You are searching...");
          }}
        >
          <i className="bi bi-search"></i>
        </Styled.IconWrapper>
        <Styled.SearchInput
          className="search-container"
          placeholder="Search Tweeter"
          type={"text"}
        ></Styled.SearchInput>
      </Styled.Container>
    </form>
  );
}

export default SearchInput;

const Styled = {
  Container: styled.div`
    height: 40px;
    flex: 1;
    width: 100%;
  `,
  SearchInput: styled.input`
    border-radius: 20px;
    height: 100%;
    background: #383e42;
    border-left: none;
    width: 100%;
    position: relative;
    color: white;
    text-indent: 50px;
    &:focus {
      outline: 2px solid blue;
    }
  `,
  IconWrapper: styled.button`
    position: absolute;
    margin: 5px 0 0 10px;
    z-index: 10;
    border: none;
    background: transparent;
  `,
};
