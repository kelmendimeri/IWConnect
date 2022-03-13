import * as React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  category: string;
  tweetsNumber: number;
}
function RecomandationItem({ tweetsNumber, category, title }: Props) {
  return (
    <Styled.Container>
      <Styled.Item>
        <Styled.Category>{category}</Styled.Category>
        <Styled.Title>{title}</Styled.Title>
        <Styled.TweetNumber>{tweetsNumber} Tweets</Styled.TweetNumber>
      </Styled.Item>
      <Styled.IconWrapper>
        <i className="bi bi-three-dots"></i>
      </Styled.IconWrapper>
    </Styled.Container>
  );
}

export default RecomandationItem;

const Styled = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    // height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    &:hover {
      background: lightblue;
    }
  `,

  Item: styled.div`
    margin: 4px 0;
  `,
  IconWrapper: styled.div``,
  Category: styled.p`
    color: grey;
    font-size: 15px;
    padding: 0;
    margin: 0;
  `,
  Title: styled.h6`
    color: white;
    font-size: 20px;
    padding: 0;
    margin: 0;
  `,
  TweetNumber: styled.p`
    color: grey;
    font-size: 15px;
    padding: 0;
    margin: 0;
  `,
};
