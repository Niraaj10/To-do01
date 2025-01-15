import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!username.trim()) {
      alert("Username cannot be empty");
      return;
    }

    dispatch(login({ username, password }));
    navigate("/");
  };

  return (
    <div className="w-full h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#33425b] via-[#87dfd6] to-[#38817a] flex items-center justify-center">
      <div className="h-[60vh] w-[80vw] lg:w-[30vw] bg-[#f2f2f21b] flex flex-col items-center justify-center rounded-lg shadow-lg backdrop-blur-xl gap-10">
        <h1 className="text-5xl text-white font-bold">DoIt</h1>
        <div>You can use anything its just a demo</div>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="p-2 px-4 rounded-lg focus:outline-green-200 w-[70%]"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="p-2 px-4 rounded-lg focus:outline-green-200 w-[70%]"
        />
        <button onClick={handleLogin} className="p-2 px-9 rounded-lg bg-black text-white">Login</button>
      </div>
    </div>
  );
};

export default Login;
