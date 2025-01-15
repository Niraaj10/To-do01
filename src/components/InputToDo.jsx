import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/slices/tasksSlice";
import Imp2 from '../assets/svg/Imp2.svg'
import imp from '../assets/svg/imp.svg'

const InputToDo = () => {
  const [task, setTask] = useState("");
  // const [priority, setPriority] = useState("Medium");
  const [date, setDate] = useState('');
  const [isImportant, setIsImportant] = useState(false);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim() === "") alert("Please enter a task description");
    if (task.trim()) {
      dispatch(addTask({ task, date, isImportant, completed: false }));
      setTask("");
      // setPriority("Medium");
      setDate('');
      setIsImportant(false);
    }
  };

  return (
    <main className="task-input-section mt-24 p-4 px-10">
      <h2 className="text-xs font-bold ">Add A Task</h2>

      <div className="task-input-form bg-gradient-to-t from-[#6de87123] to-[#d0ffd222] pt-10 flex flex-col gap-4 my-2 py-5 border-gray-100 border-t border-b">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task description"
          className="input outline-none p-2 flex-grow bg-transparent"
        />
        <div className="flex items-center justify-between gap-4">
          <div className="flex gap-2 items-center">

            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="input p-2 bg-transparent"
            />
            <button
              onClick={() => setIsImportant((prev) => !prev)}
              className={`btn-important p-2 `}
            >
              {!isImportant ? <img src={imp} alt="" /> : <img src={Imp2} alt="" />}
              
              
            </button>

          </div>

          <button
            onClick={handleAddTask}
            className="btn-add bg-[#3579373b] text-[#357937] font-bold p-2 px-4 rounded-lg mr-5"
          >
            ADD TASK
          </button>
        </div>
      </div>
    </main>
  );
};

export default InputToDo;
