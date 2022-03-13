import * as React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  username: string;

  profileImageSrc?: string;
}

function RecomandationFollow({ username, title, profileImageSrc }: Props) {
  return (
    <Styled.Container>
      <Styled.Items>
        <Styled.Item>
          <Styled.ProfileImage>
            {/* <img src={profileImageSrc} /> */}
          </Styled.ProfileImage>
          <Styled.Main>
            <Styled.Title>{title}</Styled.Title>
            <Styled.Username>{username}</Styled.Username>
          </Styled.Main>
          <Styled.Follow>Follow</Styled.Follow>
        </Styled.Item>
      </Styled.Items>
    </Styled.Container>
  );
}

export default RecomandationFollow;

const Styled = {
  Container: styled.div`
    background: #383e42;
    display: flex;
    margin: 15px 0;
    flex-direction: column;
    border-radius: 25px;
    justify-content: center;
  `,
  Main: styled.div`
    color: white;
    align-items: center;
    align-content: center;
  `,
  Title: styled.h6`
    color: white;
    margin: 0;
    padding: 0;
  `,
  Username: styled.p`
    color: grey;
    margin: 0;
    padding: 0;
  `,
  ProfileImage: styled.span`
    color: white;
    background: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
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
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  `,
  Follow: styled.button`
    border-radius: 25px;
    background: white;
    outline: none;
    inline: none;
    border: none;
  `,
  More: styled.button`
    color: cyan;
    outline: none;
    inline: none;
    border: none;
    background: transparent;
    border: none;
  `,
};
