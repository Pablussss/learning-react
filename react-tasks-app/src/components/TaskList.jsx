import { TaskCard } from "./TaskCard";

export function TaskList({ tasks, deleteTask }) {
  if (tasks.length === 0) return <h1>No hay tareas</h1>;

  return (
    <div>
      <h1>TaskList</h1>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} deleteTask={deleteTask} />
      ))}
    </div>
  );
}
