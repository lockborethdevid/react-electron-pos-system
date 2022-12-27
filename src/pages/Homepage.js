import React from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <p>Test HomePage</p>
      <button onClick={() => navigate("/auth")}>Log out</button>
    </div>
  );
};

export default Homepage;
