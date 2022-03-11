import * as React from "react";
import styled from "styled-components";
import RecomandationFollow from "./Components/RecomandationFollow";

function RecomantionFollows() {
  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.TextWrapper>Who to Follow</Styled.TextWrapper>
        {/* just added for alignment*/}
        <Styled.IconWrapper>
          <i style={{ color: "transparent" }} className="bi bi-three-dots"></i>{" "}
        </Styled.IconWrapper>
      </Styled.Header>
      <Styled.Items>
        <RecomandationFollow title={"MTV1"} username={"@mtv1"} />
        <RecomandationFollow title={"TV21"} username={"@tv21"} />
        <RecomandationFollow title={"DigiAction"} username={"@digialb"} />
      </Styled.Items>
      <Styled.More>Show More</Styled.More>
    </Styled.Container>
  );
}

export default RecomantionFollows;

const Styled = {
  Container: styled.div`
    background: #383e42;
    display: flex;
    margin: 20px 0;
    flex-direction: column;
    border-radius: 25px;
    justify-content: space-around;
  `,
  Header: styled.div`
    color: white;
    font-weight: bold;
    display: flex;
    flex-directoin: row;
    float: left;
    height: 50px;
    align-items: center;
    align-contenr: center;
    justify-content: space-around;
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
    border: none;
    height: 50px;
  `,
};
