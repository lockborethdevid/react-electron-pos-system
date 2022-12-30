import React from "react";
import { useNavigate } from "react-router-dom";

import { logout } from "../services/auth-service";

import NavBar from "../components/Navbar/NavBar";

const Homepage = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/auth");
  };
  return (
    <div>
      <NavBar />
      <button onClick={() => navigate("/auth")}>Log out</button>

    </div>
  );
};

export default Homepage;
