import React from 'react';
import ProfileImg from '../assets/ProPic.png'

const Sidebar = ({ user, tasks, onViewChange }) => {


    return (
        <aside className="sidebar mt-20 pt-28 p-4 h-[90vh] w-[20vw] ">
            <div className='bg-[#e3ffe2] h-full '>
                <div className="user-info flex flex-col items-center mb-6">
                    <img
                        src={ProfileImg}
                        alt="User Profile"
                        className="rounded-full mt-[-70px] w-24 h-24 object-cover mb-4"
                    />
                    <h2 className="text-xl font-bold">Hey, {user}</h2>
                </div>
                <nav className="navigation">
                    <div className="sidebar p-4 ">
                        <h2 className="text-lg font-bold mb-4">Tasks</h2>
                        <ul>
                            <li className="cursor-pointer mb-2" onClick={() => onViewChange("all")}>
                                All Tasks
                            </li>
                            <li className="cursor-pointer mb-2" onClick={() => onViewChange("today")}>
                                Today's Tasks
                            </li>
                            <li className="cursor-pointer mb-2" onClick={() => onViewChange("important")}>
                                Important Tasks
                            </li>
                            <li className="cursor-pointer mb-2" onClick={() => onViewChange("completed")}>
                                Completed Tasks
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="task-summary mt-auto">
                    <h3 className="text-lg font-bold mb-2">Today's Tasks</h3>
                    <div className="flex items-center gap-4">
                        <div className="progress-circle">{/* Add progress chart here */}</div>
                        <div>
                            <p className="text-sm">Pending: {tasks.pending}</p>
                            <p className="text-sm">Done: {tasks.completed}</p>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;