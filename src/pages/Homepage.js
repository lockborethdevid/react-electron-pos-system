import React from "react";
import { useNavigate } from "react-router-dom";

import { logout } from "../services/auth-service";

import NavBar from "../components/Navbar/NavBar";
import "./Homepage.css";
import Content from "../components/Content/Content";

const Homepage = () => {
  const navigate = useNavigate();

  // const handleLogout = () => {
  //   logout();
  //   navigate("/auth");
  // };
  return (
    <div>
      <NavBar />
      {/* <button onClick={() => navigate("/auth")}>Log out</button> */}
      <Content />
    </div>
  );
};

export default Homepage;
