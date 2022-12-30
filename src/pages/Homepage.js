import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/Navbar/NavBar";
const Homepage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <NavBar />
      <button onClick={() => navigate("/auth")}>Log out</button>
    </div>
  );
};

export default Homepage;
