import { useState } from "react";
export function TaskForm({ createTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    createTask({ title, description });
    setTitle("");
    setDescription("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Escribe tu tarea"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
        autoFocus
      />
      <textarea
        placeholder="Escribe la descripcion de la tarea"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        value={description}
      ></textarea>
      <button>Save</button>
    </form>
  );
}

export default TaskForm;
