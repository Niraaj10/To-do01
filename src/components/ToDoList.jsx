import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../redux/slices/tasksSlice";

const ToDoList = ({ view }) => {
  const tasks = useSelector((state) => state.tasks.tasks);
  console.log("TT::",tasks)
  const dispatch = useDispatch();

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const getFilteredTasks = () => {
    const today = new Date().toISOString().split("T")[0];
    if (view === "today") {
      return tasks.filter((task) => task.date === today);
    } else if (view === "important") {
      return tasks.filter((task) => task.isImportant);
    } else if (view === "completed") {
      return tasks.filter((task) => task.completed);
    }
    return tasks; // Default: All tasks
  };

  const filteredTasks = getFilteredTasks();

  return (
    <div className="main-content p-4 flex-1">
      <h2 className="text-lg font-bold mb-4">
        {view.charAt(0).toUpperCase() + view.slice(1)} Tasks
      </h2>
      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id} className="mb-2">
            <input type="checkbox" checked={task.completed} />
            <div>{task.task}</div>
            <span className={task.completed ? "line-through" : ""}>{task.task}</span>
            {task.isImportant && <span className="ml-2 text-red-500 font-bold">★</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
