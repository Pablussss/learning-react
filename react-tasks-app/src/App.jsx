import { TaskList } from "./components/TaskList";
import { TaskForm } from "./components/TaskForm";
import { tasks as data } from "./data/tasks";
import { useState, useEffect } from "react";

export function App() {
  const [tasks, setTask] = useState([]);

  useEffect(() => {
    setTask(data);
  }, []);

  function createTask(task) {
    setTask([
      ...tasks,
      {
        id: tasks.length,
        title: task.title,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTask(tasks.filter((task) => task.id != taskId));
  }

  return (
    <>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </>
  );
}
