import React from "react";
import "./App.css";
import Button from "./components/Button/Button";

function App() {
  return (
    <>
      <Button name="Tweet1" backgroundColor="red" textColor="white" />
      <Button name="Tweet2" backgroundColor="yellow" textColor="blue" />
      <Button name="Tweet3" backgroundColor="green" textColor="orange" />
      <Button name="Tweet3" backgroundColor="green" />
    </>
  );
}

export default App;
