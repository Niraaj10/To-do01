import React, { useState } from 'react'
import { useSelector } from "react-redux";
import TaskInput from "./InputToDo";
import TaskList from "./ToDoList";
import Sidebar from "./Sidebar";

const ContainerMain = ({ isSidebarOpen }) => {
    const [view, setView] = useState("all");
    const user = useSelector((state) => state.auth.user);
    const tasks = useSelector((state) => state.tasks);
    console.log("task :", tasks)
    

    const handleViewChange = (newView) => {
        setView(newView);
    };
    return (
        <div className='w-full justify-center'>
            <div className="flex w-full">
                <Sidebar view={view} user={user} tasks={tasks} onViewChange={handleViewChange} isSidebarOpen={isSidebarOpen} />
                <div className='w-full'>
                <TaskInput />
                <TaskList view={view} />
                </div>
            </div>
                {/* <LogoutButton /> */}
                
        </div>
    )
}

export default ContainerMain
