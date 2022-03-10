import React, { useEffect, useState } from "react";
import Post from "./Components/Post/Post";
import type { Post as PostType } from "./Types";
export const Main = () => {
  const [data, setDate] = useState<PostType[]>();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data: PostType[]) => setDate(data))
      .catch((err) => console.log(err));
  }, []);
  console.log(data);
  return (
    <main className="col-6" style={{ border: " 1px solid white" }}>
      {data?.map((post) => {
        return <Post key={post.id} title={post.title} content={post.body} />;
      })}
    </main>
  );
};
