import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TaskInput from "./components/InputToDo";
import TaskList from "./components/ToDoList";
import LoginForm from "./components/auth/Login";
import LogoutButton from "./components/auth/Logout";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Sidebar from "./components/Sidebar";
import { useSelector } from "react-redux";
import Header from "./components/Header";

const App = () => {
  const [view, setView] = useState("all"); 
  const user = useSelector((state) => state.auth.user);
  const tasks = useSelector((state) => state.tasks);
  console.log("task :",tasks)

  const handleViewChange = (newView) => {
    setView(newView);
  };

  return (
    <Router>
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Header />
                <div className="flex w-full justify-center items-center"> 
                <Sidebar user={user} tasks={tasks} onViewChange={handleViewChange}/>
                <TaskInput />
                <TaskList view={view}/>
                <LogoutButton />
                </div>
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

