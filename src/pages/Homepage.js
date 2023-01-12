import React, { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { logout } from "../services/auth-service";
import NavBar from "../components/Navbar/NavBar";
import "./Homepage.css";
import Content from "../components/Content/Content";

export const tokenContext = createContext();

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <NavBar />
      {/* <button onClick={() => navigate("/auth")}>Log out</button> */}
      <Content />
    </div>
  );
};

export default Homepage;
