import React, { useState } from "react";

interface Props {
  backgroundColor: string;
  textColor?: string;
  name?: string;
}
interface State {
  users: string[];
  post: string[];
  comments: string[];
  mynumber: number;
  mybool: boolean;
}

const Button = ({ name, backgroundColor, textColor = "purple" }: Props) => {
  const [state, setState] = useState({
    users: ["Kelmend", "Imeri"],
    posts: [],
    commments: [],
    mynumber: 0,
    mybool: true,
  });

  //const [clicked, setClicked] = useState<number>(0);
  const [text, setText] = useState<string>("");

  return (
    <>
      <div
        onMouseOver={() => {
          console.log("hoverd");
        }}
        onClick={() => {}}
        style={{
          backgroundColor,
          width: "100px",
          // color: textColor,
          color: textColor ? textColor : "purple",
          borderRadius: 10,
          padding: "10px 30px",
          justifyContent: "center",
        }}
      >
        {name}
      </div>
      <input
        onChange={(event) => {
          console.log(event.target.value);
          setText(event.target.value);
        }}
      />
      {text}
    </>
  );
};

export default Button;
