import * as React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// import { Post as PostType } from "../../Types";
import Action from "./Components/Action";

interface Props {
  title: string;
  content: string;
  id: number;
  userId: number;
  // post: PostType;
}

export default function Post({ id, title, content, userId }: Props) {
  const navigate = useNavigate();

  return (
    <Styled.Container>
      <Styled.AdditionalInfo>BitCOin cryptocurrency</Styled.AdditionalInfo>
      <Styled.Wrapper>
        <Styled.IconWrapper></Styled.IconWrapper>
        <Styled.MainContent>
          <Styled.Title>{title}</Styled.Title>
          <Styled.Content>{content}</Styled.Content>
          <Styled.Action>
            <Action icon={<i className="bi bi-chat"></i>} actionNumber={522} />
            <Action icon={<i className="bi bi-share"></i>} actionNumber={522} />
            <Action
              icon={<i className="bi bi-recycle"></i>}
              actionNumber={522}
            />
            <Action
              icon={<i className="bi bi-box-arrow-up"></i>}
              actionNumber={522}
            />
          </Styled.Action>
        </Styled.MainContent>
      </Styled.Wrapper>
      <button
        onClick={() => {
          navigate(`/posts/${id}`, {
            state: {
              title: title,
              content: content,
              userId: userId,
              id: id,
            },
          });
        }}
      >
        navigate to post
      </button>
    </Styled.Container>
  );
}

const Styled = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    // border: 1px solid white;
  `,
  AdditionalInfo: styled.span`
    width: 100%;
    color: white;
    border: 1px solid red;
  `,
  Wrapper: styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
    border: 1px solid white;
  `,
  IconWrapper: styled.div`
    width: 50px;
    flex: 1;
    height: 50px;
    border-radius: 50%;
    background: red;
  `,
  MainContent: styled.div`
    diplay: flex;
    flex: 10;
    flex-direction: column;
    // height: 100px;
    border: 1px solid yellow;
  `,
  Title: styled.h4`
    margin: 0;
    padding: 0;
    text-align: left;
    color: white;
  `,
  Content: styled.p`
    color: grey;
  `,
  Action: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,
};
