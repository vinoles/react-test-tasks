import { createContext, useState, useEffect } from "react";
import { tasks as dataTasks } from "../tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  const createTask = (task) => {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length + 1,
        description: task.description,
      },
    ]);
  };

  const deleteTask = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);

    setTasks(newTasks);
  };

  useEffect(() => {
    setTasks(dataTasks);
  }, []); // se ecjecuta cuando carga el componente

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
