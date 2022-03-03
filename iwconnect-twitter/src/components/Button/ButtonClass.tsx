import React, { Component } from "react";

interface Props {
  backgroundColor: string;
  textColor?: string;
  name?: string;
}

interface State {
  users: string[];
  posts: Array<string>;
  comments: string[];
  mynum: number;
  mybool: boolean;
}

class ButtonClass extends Component<Props, State, {}> {
  constructor(props: Props) {
    super(props);
    this.state = {
      users: ["Kelmend", "Imeri"],
      posts: [],
      comments: [],
      mynum: 0,
      mybool: true,
    };
  }
  componentDidMount() {
    this.setState({
      users: ["Une"],
      mybool: false,
    });
  }

  render() {
    const { backgroundColor, name, textColor } = this.props;
    return (
      <div
        onClick={() => {}}
        style={{
          backgroundColor: backgroundColor,
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
  }
}

export default ButtonClass;
