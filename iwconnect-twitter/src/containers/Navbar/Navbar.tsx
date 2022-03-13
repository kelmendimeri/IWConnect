import React from "react";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import { NavLink } from "./NavLink/NavLink";

export const Navbar = () => {
  return (
    <Styled.Container className="col-3">
      <NavLink to="/" icon={<i className="bi bi-twitter"></i>} />
      <NavLink to="/" text="Home" icon={<i className="bi bi-house"></i>} />
      <NavLink
        to="/posts"
        text="Posts"
        icon={<i className="bi bi-heart"></i>}
      />
      <NavLink
        to="/explore"
        text="Explore"
        icon={<i className="bi bi-hash"></i>}
      />
      <NavLink
        to="/notifications"
        text="Notifications"
        icon={<i className="bi bi-bell"></i>}
      />
      <NavLink
        to="/messages"
        text="Messages"
        icon={<i className="bi bi-envelope"></i>}
      />
      <NavLink
        to="/bookmarks"
        text="Bookmarks"
        icon={<i className="bi bi-bookmark"></i>}
      />
      <NavLink to="/lists" text="List" icon={<i className="bi bi-list"></i>} />
      <NavLink
        to="/profile"
        text="Profile"
        icon={<i className="bi bi-person"></i>}
      />
      <NavLink
        to="/more"
        text="More"
        icon={<i className="bi bi-three-dots"></i>}
      />
      <Button name="Tweet" textColor="white" backgroundColor="grey"></Button>
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.nav`
    backgroung: cyan;
  `,
  Title: styled.h1``,
};
