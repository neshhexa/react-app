import React from "react";

function Button({ changeText }) {
  return (
    <div>
      <button onClick={changeText}>Click</button>
    </div>
  );
}

export default Button;
