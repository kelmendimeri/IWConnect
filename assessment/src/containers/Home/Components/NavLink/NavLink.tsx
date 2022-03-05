import * as React from "react";
import styled from "styled-components";

interface Props {
  icon?: any;
  text: string;
}

function NavLink({ icon, text }: Props) {
  return (
    <Styled.Container>
      <Styled.IconWrapper>{icon}</Styled.IconWrapper>
      <Styled.TextWrapper>{text}</Styled.TextWrapper>
    </Styled.Container>
  );
}

export default NavLink;

const Styled = {
  Container: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    height:: 50px;
    margin: "10px"
    margin-bottom: 10px;
    `,
  IconWrapper: styled.div`
    display: flex;
    // border: 1px solid white;
    flex: 1;
  `,
  TextWrapper: styled.div`
    display: flex;
    justify-content: flex-start;
    flex: 4;
    padding-left: 10px;
    justify-content: center;
  `,
};
