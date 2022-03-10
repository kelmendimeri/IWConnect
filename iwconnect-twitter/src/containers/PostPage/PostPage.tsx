import * as React from "react";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

function Post(props: any) {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log("props", location);
  const [data, setData] = React.useState();
  React.useEffect(() => {
    const fetchFromApi = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.id}`
      );
      const data = await response.json();
      setData(data);
      if ((!location?.state as any)?.id) {
        fetchFromApi();
      }
    };
  }, [params.id]);
  console.log();
  return (
    <div>
      Post Number
      <button
        onClick={() => {
          navigate(`/posts/97`);
        }}
      >
        click me
      </button>
    </div>
  );
}

export default Post;
