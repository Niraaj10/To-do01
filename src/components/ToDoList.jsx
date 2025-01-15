import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, updateTask } from "../redux/slices/tasksSlice";
import Imp2 from '../assets/svg/Imp2.svg'
import imp from '../assets/svg/imp.svg'
import delete1 from '../assets/svg/delete.svg'
import TaskDetails from "./TaskDetails";
import { fetchWeatherData } from "../utils/WeatherInfo";

const ToDoList = ({ view }) => {
  const tasks = useSelector((state) => state.tasks.tasks);
  // console.log("TT::", tasks)
  const dispatch = useDispatch();
 

  const [selectedTask, setSelectedTask] = useState(null);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [weather, setWeather] = useState(null);

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const handleToggleCompleted = (id, currentStatus) => {
    dispatch(updateTask({ id, updates: { completed: !currentStatus } }));
  };

  const handleToggleImportant = (id, currentStatus) => {
    dispatch(updateTask({ id, updates: { isImportant: !currentStatus } }));
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

  const handleFetchWeather = async () => {
    try {
      const city = 'Pune'; 
      const weatherData = await fetchWeatherData(city, );
      // console.log(weatherData.current)
      // setWeather(weatherData);
      setWeather(weatherData.current);
    } catch (err) {
      console.error('Error fetching weather data:', err.message);
      setError(err.message);
    }
  };

  const handleTaskClick = (task) => {
    handleFetchWeather(task);
    setSelectedTask(task);
    setSidebarOpen(true);
  };

  return (
    <div className="main-content p-2 mx-4">
      <h2 className="text-xs font-bold px-2">
        {view.charAt(0).toUpperCase() + view.slice(1)} Tasks
      </h2>
      <ul className="px-6 h-[40vh] overflow-y-scroll">
        {filteredTasks.map((task) => (
          <li key={task.id} className="mb-2 py-3 border-b flex items-center justify-between" >
            <div className="flex items-center gap-5">
              <input type="checkbox" checked={task.completed} onChange={() => handleToggleCompleted(task.id, task.completed)} className="w-5 h-5" />
              <div onClick={() => handleTaskClick(task)}>{task.task}</div>
            </div>
            {/* <span className={task.completed ? "line-through" : ""}>{task.task}</span> */}
            <div className="flex items-center gap-5">
              <button
                onClick={() => handleToggleImportant(task.id, task.isImportant)}
                className="ml-2 text-red-500 font-bold"
              >
                <img
                  src={task.isImportant ? Imp2 : imp}
                  alt="Important"
                />
              </button>
              <button
                onClick={() => handleDeleteTask(task.id)}
                className="ml-2 text-red-500 font-bold"
              >
                <img
                  src={delete1}
                  alt="delete"
                />
              </button>
            </div>
          </li>
        ))}
      </ul>

      <TaskDetails
        task={selectedTask}
        isOpen={isSidebarOpen}
        onClose={() => setSidebarOpen(false)}
        weather={weather}
      />
    </div>
  );
};

export default ToDoList;
