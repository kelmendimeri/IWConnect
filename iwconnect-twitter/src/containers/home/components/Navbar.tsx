import React from "react";
import styled from "styled-components";
import Button from "../../../components/Button/Button";
import { NavLink } from "./NavLink/NavLink";

export const Navbar = () => {
  return (
    <Styled.Container className="col-3">
      <Button name="Tweet" backgroundColor="green" />
      <NavLink></NavLink>
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.nav`
    backgroung: cyan;
    height: 100vh;
  `,
  Title: styled.h1``,
};
