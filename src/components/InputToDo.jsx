import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/slices/tasksSlice";

const InputToDo = () => {
  const [task, setTask] = useState("");
  // const [priority, setPriority] = useState("Medium");
  const [date, setDate] = useState('');
  const [isImportant, setIsImportant] = useState(false);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask({ task, date, isImportant, completed: true }));
      setTask("");
      // setPriority("Medium");
      setDate('');
      setIsImportant(false);
    }
  };

  return (
    <main className="task-input-section p-4">
    <h2 className="text-xl font-bold mb-4">Add A Task</h2>
    <div className="task-input-form flex gap-4 mb-4">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task description"
        className="input border p-2 flex-grow"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="input border p-2"
      />
      <button
        onClick={() => setIsImportant((prev) => !prev)}
        className={`btn-important border p-2 ${isImportant ? 'bg-yellow-500' : ''}`}
      >
        {!isImportant ? 'Mark Important' : 'Important!'}
      </button>
      <button
        onClick={handleAddTask}
        className="btn-add bg-green-500 text-white p-2"
      >
        Add Task
      </button>
    </div>
    <div className="task-list">
      {/* Render tasks here */}
    </div>
  </main>
  );
};

export default InputToDo;
