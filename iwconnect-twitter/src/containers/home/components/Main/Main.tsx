import React, { useEffect, useState } from "react";
import Post from "./Components/Post/Post";
import type { Post as PostType } from "./Types";

const Main = () => {
  const [data, setDate] = useState<PostType[]>();

  useEffect(() => {
    //   fetch("https://jsonplaceholder.typicode.com/posts")
    //     .then((response) => response.json())
    //     .then((data: PostType[]) => setDate(data))
    //     .catch((err) => console.log(err));

    const fetchFromApi = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const posts: PostType[] = await response.json();
      setDate(posts);
    };
    fetchFromApi();
  }, []);

  console.log(data);
  return (
    <main className="col-6" style={{ border: " 1px solid white" }}>
      {data?.map((post) => {
        return (
          <Post
            // {...post}
            key={post.id}
            title={post.title}
            content={post.body}
            id={post.id}
            userId={post.userId}
          />
        );
      })}
    </main>
  );
};

export default Main;
