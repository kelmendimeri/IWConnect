import React from "react";
import styled from "styled-components";

interface Props {
  icon?: any;
  text?: string;
  category?: string;
  countTweets?: string;
}

export const SearchNavLink = ({ icon, text, category, countTweets }: Props) => {
  return <Styled.Container></Styled.Container>;
};

const Styled = {
  Container: styled.div`
    margin: 10px;
    font-size: 14px;
    border: 1px solid red;
    height: 70px;
    display: flex;
    flex-direction: row;
  `,
  IconWrapper: styled.div`
    // position: relative;
    margin-right: 0px;
    top: 50%;
  `,
  TextWrapper: styled.div`
    font-size: 18px;
  `,
  CountTweets: styled.div`
    color: grey;
  `,
  CategoryWrapper: styled.div`
    color: grey;
  `,
};
