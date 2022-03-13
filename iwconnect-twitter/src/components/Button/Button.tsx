import React from "react";

interface Props {
  backgroundColor?: string;
  textColor?: string;
  name?: string;
  width?: string;
  height?: string;
}

const Button = ({
  name,
  height,
  width,
  backgroundColor,
  textColor = "purple",
}: Props) => {
  return (
    <div
      onClick={() => {}}
      style={{
        backgroundColor,
        width,
        // color: textColor,
        color: textColor ? textColor : "purple",
        borderRadius: "20px",
        height,
        textAlign: "center",
        fontWeight: "bolder",
        fontSize: "16px",
        padding: "10px 30px",
        justifyContent: "center",
      }}
    >
      {name}
    </div>
  );
};

export default Button;
