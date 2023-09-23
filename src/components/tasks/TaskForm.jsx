import { useState, useContext } from "react";

import { TaskContext } from "../../context/TaskContext";

function TaskForm() {
  const { createTask } = useContext(TaskContext);

  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    createTask({ title, description }); //funcion que viene desde el prop
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-white mb-3">Agregar Tareas</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-10 mb-4 rounded-md"
      >
        <input
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
        />
        <textarea
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Descripcion"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <button className="bg-blue-600 px-2 py-1 rounded-md mt-4 hover:bg-blue-300  text-white">
          save
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
