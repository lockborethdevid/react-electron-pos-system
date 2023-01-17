import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { logout } from "../services/auth-service";
import NavBar from "../components/Navbar/NavBar";
import "./Homepage.css";
import Content from "../components/Content/Content";
import { tokenAtom } from "../atom/Atom";
import { useRecoilState } from "recoil";

const Homepage = () => {
  const navigate = useNavigate();
  const [token, setToken] = useRecoilState(tokenAtom);
  useEffect(() => {
    setToken(window.localStorage.getItem("user"));
  }, []);
  // console.log("token hehe", token);
  return (
    <div>
      <NavBar />
      {/* <button onClick={() => navigate("/auth")}>Log out</button> */}
      <Content />
    </div>
  );
};

export default Homepage;
