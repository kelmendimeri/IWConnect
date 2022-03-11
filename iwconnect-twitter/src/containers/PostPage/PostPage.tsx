import Action from "../home/components/Main/Components/Post/Components/Action";
import * as React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

interface Props {
  retweet?: number;
  likes?: number;
}

function Post({ retweet, likes }: Props, props: any) {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = React.useState();
  React.useEffect(() => {
    const fetchFromApi = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.id}`
      );
      const data = await response.json();
      setData(data);
    };
    if (!(location?.state as any)?.id) {
      fetchFromApi();
    }
    console.log("kelmend params", location);
  }, [params.id]);

  return (
    <Styled.Container className="col-6">
      <Styled.Header>
        <button
          style={{
            float: "left",
            // borderRadius: "25px",
            background: "none",
            border: "none",
            color: "white",
            padding: "20px",
          }}
          onClick={() => {
            navigate(`/`);
          }}
        >
          <i className="bi bi-arrow-left"> </i>
        </button>
        <h4>Tweet</h4>
      </Styled.Header>
      {/* need to find how to get data from location.state*/}
      <Styled.Tweet>{location.pathname}</Styled.Tweet>{" "}
      <Styled.Created>{Date().toLocaleString()}</Styled.Created>
      <Styled.ActionResults>
        <Styled.ActionData>{retweet} ReTweets</Styled.ActionData>
        <Styled.ActionData>{likes} Likes</Styled.ActionData>
      </Styled.ActionResults>
      <Styled.Action>
        <Action icon={<i className="bi bi-chat"></i>} />
        <Action icon={<i className="bi bi-share"></i>} />
        <Action icon={<i className="bi bi-recycle"></i>} />
        <Action icon={<i className="bi bi-box-arrow-up"></i>} />
      </Styled.Action>
    </Styled.Container>
  );
}

export default Post;

const Styled = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    // width: 100%;
    // justify-content: space-between;
  `,
  Header: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
  `,
  Tweet: styled.div``,
  ActionResults: styled.div`
    display: flex;
    flex-direction: row;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    justify-content: space-around;
  `,
  ActionData: styled.div`
    align-items: center;
  `,
  Action: styled.div`
    display: flex;
    flex-direciton: row;
    justify-content: space-around;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    align-items: center;
    height: 40px;
  `,
  Created: styled.div`
    display: flex;
    flex-direciton: row;
    justify-content: flex-start;
  `,
};
