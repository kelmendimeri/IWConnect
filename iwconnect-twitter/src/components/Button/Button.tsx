import React from "react";

interface Props {
  backgroundColor: string;
  textColor?: string;
  name?: string;
}

const Button = ({ name, backgroundColor, textColor = "purple" }: Props) => {
  return (
    <div
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
  );
};

export default Button;
