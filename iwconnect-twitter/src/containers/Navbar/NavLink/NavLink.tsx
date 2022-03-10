import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface Props {
  icon?: any;
  text?: string;
  to: string;
}

export const NavLink = ({ to, icon, text }: Props) => {
  return (
    <Styled.Container>
      <Link to={to}>
        <Styled.IconWrapper>{icon}</Styled.IconWrapper>
        <Styled.TextWrapper>{text}</Styled.TextWrapper>
      </Link>
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    // border: 1px solid white; // used to see the position of the navlinks
    height: 50px;
    margin-bottom: 10px;
  `,
  IconWrapper: styled.div`
    display: flex;
    boder: 1px solid blue;
    justify-content: center;
    flex: 1;
  `,
  TextWrapper: styled.div`
    display: flex;
    justify-content: flex-start;
    flex: 4;
    padding-left:10px
    justify-content: center;
  `,
};
