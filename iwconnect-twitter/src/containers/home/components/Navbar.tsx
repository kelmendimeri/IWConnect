import React from "react";
import styled from "styled-components";
import Button from "../../../components/Button/Button";
import { NavLink } from "./NavLink/NavLink";

export const Navbar = () => {
  return (
    <Styled.Container className="col-3">
      <NavLink icon={<i className="bi bi-twitter"></i>} />
      <NavLink text="Home" icon={<i className="bi bi-house"></i>} />
      <NavLink text="Explore" icon={<i className="bi bi-hash"></i>} />
      <NavLink text="Notifications" icon={<i className="bi bi-bell"></i>} />
      <NavLink text="Messages" icon={<i className="bi bi-envelope"></i>} />
      <NavLink text="Bookmarks" icon={<i className="bi bi-bookmark"></i>} />
      <NavLink text="List" icon={<i className="bi bi-list"></i>} />
      <NavLink text="Profile" icon={<i className="bi bi-person"></i>} />
      <NavLink text="More" icon={<i className="bi bi-three-dots"></i>} />
      <Button name="Tweet" textColor="white" backgroundColor="grey"></Button>
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
