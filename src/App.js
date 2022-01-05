import { useState } from "react";
import "./App.css";
import Button from "./Button";

function App() {
  const [text, setText] = useState("Hello");
  const changeText = () => {
    text === "Hello" ? setText("Thank You") : setText("Hello");
  };

  return (
    <div className="App">
      <h2>{text}</h2>
      <Button changeText={changeText} />
    </div>
  );
}

export default App;
