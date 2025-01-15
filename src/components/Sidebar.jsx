import React from 'react';
import ProfileImg from '../assets/ProPic.png'
import alltask from '../assets/svg/alltask.svg'
import cal from '../assets/svg/calendar.svg'
import imp from '../assets/svg/imp.svg'
import completed from '../assets/svg/completed.svg'

const Sidebar = ({ view, user, tasks, onViewChange, isSidebarOpen }) => {
    console.log("View: " + isSidebarOpen)


    return (
        <aside className={`sidebar absolute md:static lg:static mt-28 bg-white md:mt-20 lg:mt-20 md:pt-28 lg:pt-28 p-4 h-[90vh] transition-all duration-200 ${
            isSidebarOpen ? "w-full md:w-[25vw] lg:w-[25vw]" : "w-0 "
          } `}>
            <div className={`bg-[#e3ffe2] h-full px-6 ${
            isSidebarOpen ? " block" : " hidden"
          } `}>
            {/* <div className='bg-[#e3ffe2] h-full px-6'> */}
                <div className="user-info flex flex-col items-center mb-6">
                    <img
                        src={ProfileImg}
                        alt="User Profile"
                        className="rounded-full mt-[-70px] w-24 h-24 object-cover mb-4"
                    />
                    <h2 className="text-xl font-bold">Hey, {user}</h2>
                </div>
                <nav className="navigation px-4 bg-white py-4 rounded-md">
                    <div className="sidebar ">
                        <h2 className="text-lg font-bold mb-4">Tasks</h2>
                        <ul>
                            <li className={`flex gap-2 items-center cursor-pointer mb-2 w-full p-2 px-4 transition-all duration-200 ${view === "all" ? "font-semibold text-[#357937] bg-[#35793720] rounded-md" : ""}`} onClick={() => onViewChange("all")}>
                                <img src={alltask} alt="" />
                                All Tasks
                            </li>
                            <li className={`flex gap-2 items-centercursor-pointer mb-2 w-full p-2 px-4 transition-all duration-200 ${view === "today" ? "font-semibold text-[#357937] bg-[#35793720] rounded-md" : ""}`} onClick={() => onViewChange("today")}>
                                <img src={cal} alt="" />
                                Today's Tasks
                            </li>
                            <li className={`flex gap-2 items-centercursor-pointer mb-2 w-full p-2 px-4 transition-all duration-200 ${view === "important" ? "font-semibold text-[#357937] bg-[#35793720] rounded-md" : ""}`} onClick={() => onViewChange("important")}>
                                <img src={imp} alt="" />
                                Important Tasks
                            </li>
                            <li className={`flex gap-2 items-centercursor-pointer mb-2 w-full p-2 px-4 transition-all duration-200 ${view === "completed" ? "font-semibold text-[#357937] bg-[#35793720] rounded-md" : ""}`} onClick={() => onViewChange("completed")}>
                                <img src={completed} alt="" />
                                Completed Tasks
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="task-summary mt-4 px-4 bg-white py-4 rounded-md">
                    <h3 className="text-lg font-bold mb-2">Today's Tasks</h3>
                    <div className="flex items-center gap-4">
                        
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