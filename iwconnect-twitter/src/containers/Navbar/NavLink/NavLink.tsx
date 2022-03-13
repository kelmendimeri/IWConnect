import React from "react";
import styled from "styled-components";
import { NavLink as RRDNavLink } from "react-router-dom";

interface Props {
  icon?: any;
  text?: string;
  to: string;
}

export const NavLink = ({ to, icon, text }: Props) => {
  return (
    <Styled.Container
      style={(props) => {
        console.log("is active", props);
        return {
          background: props.isActive ? "blue" : "red",
        };
      }}
      to={to}
    >
      <Styled.IconWrapper>{icon}</Styled.IconWrapper>
      <Styled.TextWrapper>{text}</Styled.TextWrapper>
    </Styled.Container>
  );
};

const Styled = {
  Container: styled(RRDNavLink)`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 50px;
    justify-content: center;
    margin-bottom: 10px;
    &:hover {
      background: grey;
      border-radius: 25px;
    }
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
