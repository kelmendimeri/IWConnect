import * as React from "react";

interface Props {
  backgroundColor: string;
  textColor: string;
  name: string;
}
function Button({ backgroundColor, textColor = "purple", name }: Props) {
  return (
    <div
      onClick={() => {
        console.log("button clicked");
      }}
    >
      {name}
    </div>
  );
}

export default Button;
