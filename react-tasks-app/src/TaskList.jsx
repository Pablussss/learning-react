import { tasks as data } from "./tasks";
import { useState, useEffect } from "react";

console.log(data);

export function TaskList() {
  const [tasks, setTask] = useState([]);

  useEffect(() => {
    setTask(data);
  }, []);

  if (tasks.length === 0) return <h1>No hay tareas</h1>;

  return (
    <div>
      <h1>TaskList</h1>
      {tasks.map((task) => (
        <div key={task.id}>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
}
