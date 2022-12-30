import React from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../services/auth-service";

const Homepage = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/auth");
  };
  return (
    <div>
      <p>Test HomePage</p>
      <button onClick={() => handleLogout()}>Log out</button>
    </div>
  );
};

export default Homepage;
