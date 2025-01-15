import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainContainer from "./components/ContainerMain.jsx"
import LoginForm from "./components/auth/Login";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Header from "./components/Header";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); 

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); 
    // console.log('object')
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
                <Header toggleSidebar={toggleSidebar}/>
                <div className="flex w-full justify-center items-center"> 
                <MainContainer isSidebarOpen={isSidebarOpen}/>
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

