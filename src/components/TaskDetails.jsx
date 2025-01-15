import React from 'react'
import Imp2 from '../assets/svg/Imp2.svg'
import imp from '../assets/svg/imp.svg'
import cal from '../assets/svg/calendar.svg'

const TaskDetails = ({ task, isOpen, onClose, weather }) => {
    const formattedDate = new Date().toISOString().split('T')[0];


    // console.log(weather.weather_icons[0])

    return (
        <div
            className={`fixed top-0 right-0 h-full pt-10 w-[90vw] md:w-[30vw] lg:w-[30vw]  bg-[#e3ffe2] shadow-lg transform ${isOpen ? "translate-x-0" : "translate-x-full"
                } transition-transform duration-300 z-9`}
        >
            <div className="p-6">

                <div className='Weather'>
                    {weather ? (
                        <>
                            <div className={`p-6 bg-[#e3ffe2] border-b mb-5 rounded-md max-w-md mx-auto `}>
                                <div className="flex items-center space-x-4">
                                    <img
                                        src={weather.weather_icons[0]}
                                        alt={weather.weather_descriptions[0]}
                                        className="w-20 h-20"
                                    />
                                    <div>
                                        <h2 className="text-xl font-bold">{weather.temperature}°C</h2>
                                        <h2 className="text-lg font-bold">{weather.weather_descriptions[0]}</h2>
                                        <p className="text-gray-600">
                                            Observed at: {weather.observation_time} | {weather.is_day === "yes" ? "Daytime" : "Night"}
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-4 space-y-2">
                                    <p>
                                        Temperature: <strong> {weather.temperature}°C (Feels like {weather.feelslike}°C)</strong>
                                    </p>
                                    <p>
                                        Humidity: <strong> {weather.humidity}%</strong>
                                    </p>
                                    <p>
                                        Visibility: <strong> {weather.visibility} km</strong>
                                    </p>
                                    <p>
                                        Wind: <strong>{weather.wind_speed} km/h {weather.wind_dir}</strong>
                                    </p>
                                </div>
                            </div>
                        </>
                    ) : (
                        // <p>Loading weather data...</p>
                        <div className="p-6 bg-[#e3ffe2] border-b mb-5 rounded-md max-w-md mx-auto">
                            <div className="flex items-center space-x-4">
                                <div className="w-20 h-20 bg-gray-50 animate-pulse rounded-full"></div>
                                <div className="space-y-4">
                                    <div className="w-24 h-6 bg-gray-50 animate-pulse rounded-md"></div>
                                    <div className="w-32 h-6 bg-gray-50 animate-pulse rounded-md"></div>
                                    <div className="w-48 h-4 bg-gray-50 animate-pulse rounded-md"></div>
                                </div>
                            </div>
                            <div className="mt-4 space-y-2">
                                <div className="w-48 h-4 bg-gray-50 animate-pulse rounded-md"></div>
                                <div className="w-48 h-4 bg-gray-50 animate-pulse rounded-md"></div>
                                <div className="w-48 h-4 bg-gray-50 animate-pulse rounded-md"></div>
                                <div className="w-48 h-4 bg-gray-50 animate-pulse rounded-md"></div>
                            </div>
                        </div>
                    )}


                </div>


                
                {task ? (
                    <>
                        <div className='flex flex-col gap-5'>

                            <div className="flex items-center gap-5 border-b pb-5">
                                <input
                                    type="checkbox"
                                    checked={task.completed}
                                    onChange={() => handleToggleCompleted(task.id, task.completed)}
                                    className="w-5 h-5"
                                />
                                <div className={` text-xl font-bold ${task.completed ? "line-through" : ""}`}>{task.task}</div>
                                <span className='text-sm'>{task.completed ? "(compeleted)" : "(not compeleted)" }</span>
                            </div>
                            <div className="flex items-center gap-5 border-b pb-5">
                                
                                    <img
                                        src={task.isImportant ? Imp2 : imp}
                                        alt="Important"
                                    />
                                    <div>{task.isImportant ? 'Important' : 'Not Important'}</div>
                            </div>
                            <div className="flex items-center gap-5 border-b pb-5">
                                
                                    <img
                                        src={cal}
                                        alt="Important"
                                    />
                                    <div >{task.date ? task.date : formattedDate }</div>
                            </div>
                        </div>
                    </>
                ) : (
                    <p>No task selected.</p>
                )}

                
                <button
                    className="text-3xl font-bold absolute bottom-6 right-4"
                    onClick={onClose}
                >
                    &times;
                </button>
            </div>
        </div>
    );
};

export default TaskDetails;
