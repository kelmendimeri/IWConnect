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
      <Styled.Items>
        <Styled.Item>
          <Styled.Category>{category}</Styled.Category>
          <Styled.Title>{title}</Styled.Title>
          <Styled.TweetNumber>{tweetsNumber} Tweets</Styled.TweetNumber>
        </Styled.Item>
        <Styled.IconWrapper>
          <i className="bi bi-three-dots"></i>
        </Styled.IconWrapper>
      </Styled.Items>
    </Styled.Container>
  );
}

export default RecomandationItem;

const Styled = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    height: 100px;
  `,
  Items: styled.div`
    // margin: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    // align-items: center;
  `,
  Item: styled.div``,
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
