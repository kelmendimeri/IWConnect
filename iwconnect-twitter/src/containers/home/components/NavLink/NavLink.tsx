import React from "react";
import styled from "styled-components";

export const NavLink = () => {
  return (
    <Styled.Container>
      <Styled.IconWrapper></Styled.IconWrapper>
      <Styled.TextWrapper></Styled.TextWrapper>
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    border: 2px solid black;
  `,
  IconWrapper: styled.div`
    display: flex;
    flex: 1;
  `,
  TextWrapper: styled.div`
    display: flex;
    border: 1px solid white;
    flex: 5;
  `,
};
