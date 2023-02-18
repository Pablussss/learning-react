import { useState, useEffect } from "react";

export function Counter() {
  const [message, setMessage] = useState("");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("contador");
  }, [counter]);

  return (
    <div>
      <input onChange={(e) => setMessage(e.target.value)} />
      <button
        onClick={() => {
          alert("Mensaje es: " + message);
        }}
      >
        Save
      </button>
      <hr />
      <h1>Counter: {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Incrementar
      </button>
    </div>
  );
}
