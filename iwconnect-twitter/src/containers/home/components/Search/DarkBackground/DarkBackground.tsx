import React from "react";
import styled from "styled-components";
import { SearchNavLink } from "../SearchNavLink";
// import { JsxElement } from "typescript";

interface Props {
  title: string;
  icon?: any;
}

function DarkBackground({ title, icon }: Props) {
  return (
    <Styled.Container>
      {/* <Styled.TitleWrapper>{title}</Styled.TitleWrapper>
        <Styled.IconWrapper>{icon}</Styled.IconWrapper>
        <Styled.Container></Styled.Container>
        <Styled.ButtonWrapper>Show more</Styled.ButtonWrapper>

        </Styled.Container> */}

      <SearchNavLink
        category="Politics"
        text="#Ukrain-Warr"
        countTweets={"250 Tweets"}
        icon={<i className="bi bi-three-dots"></i>}
      />
    </Styled.Container>
  );
}

export default DarkBackground;
const Styled = {
  Container: styled.div`
    height: auto;
    width: 100%;
    margin-top: 20px;
    background: #383e42;
    border-radius: 20px;
  `,
  TitleWrapper: styled.div`
    float: left;
    font-size: 14px;
    text-size: 18px;
    padding: 20px;
  `,
  IconWrapper: styled.div`
    float: right;
    padding: 20px;
  `,
  ButtonWrapper: styled.button`
    background: transparent;
    border: none;
    color: cyan;
    padding: 20px;
    bottom: 0;
  `,
};
