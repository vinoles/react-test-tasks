import TaskCard from "./TaskCard";
import { TaskContext } from "../../context/TaskContext";
import { useContext } from "react";

function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return (
      <p className="text-white text-4xl text-center font-bold">
        {" "}
        No hay tareas creadas
      </p>
    );
  }

  let cols = tasks.length < 4 ? tasks.length : 4;

  return (
    <div className={`grid grid-cols-${cols} gap-2`}>
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  );
}

export default TaskList;
