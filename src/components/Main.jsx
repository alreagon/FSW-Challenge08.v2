// src/components/Main.jsx
import React, { useState } from "react";

const Main = () => {
  const [count, setCount] = useState(0);

  return (
    <main>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </main>
  );
};

export default Main;
