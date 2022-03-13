import React from "react";
import styled from "styled-components";
import RecomandationItems from "./Components/RecomandationItems";

function RecomantationPost() {
  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.TextWrapper>Trends for you</Styled.TextWrapper>
        <Styled.IconWrapper>
          <i className="bi bi-gear"></i>
        </Styled.IconWrapper>
      </Styled.Header>
      <Styled.Items>
        <RecomandationItems
          title="Ukrain-Russia"
          category="Politics"
          tweetsNumber={2500}
        />
        <RecomandationItems
          title="EuroVision"
          category="Politics"
          tweetsNumber={2500}
        />
        <RecomandationItems
          title="Gas Inflation"
          category="Economics"
          tweetsNumber={2500}
        />
        <Styled.More
          onClick={() => {
            alert("by");
          }}
        >
          <h6>Show more</h6>
        </Styled.More>
      </Styled.Items>
    </Styled.Container>
  );
}

export default RecomantationPost;

const Styled = {
  Container: styled.div`
    background: #383e42;
    display: flex;
    margin: 15px 0;
    flex-direction: column;
    border-radius: 25px;
    justify-content: center;
  `,
  Header: styled.div`
    color: white;
    font-weight: bold;
    display: flex;
    flex-directoin: row;
    justify-content: space-around;
    height: 50px;
    align-items: center;
    align-content: center;
  `,
  TextWrapper: styled.h6`
    color: white;
    // margin-left: 0;
  `,
  IconWrapper: styled.span`
    color: white;
    // margin-right: 0;
  `,
  Items: styled.div`
    // margin: 20px;
    display: flex;

    flex-direction: column;
    justify-content: space-around;
    // align-items: center;
  `,
  Item: styled.div`
    display: flex;
    flex-direction: column;
  `,
  More: styled.button`
    color: cyan;
    background: transparent;
    height: 50px;
    outline: none;
    inline: none;
    border: none;
  `,
};
