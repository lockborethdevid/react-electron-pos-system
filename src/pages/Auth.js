import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Signup, Signin } from "../services/auth-service";
import "./Auth.css";

const Auth = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const [storeName, setStoreName] = useState("");
  const [storeLocation, setStoreLocation] = useState("");
  const navigate = useNavigate();

  const clickSignupButton = () => {
    document.getElementById("container").classList.add("right-panel-active");
    setEmail("");
    setPassword("");
  };
  const clickSigninButton = () => {
    document.getElementById("container").classList.remove("right-panel-active");
    setEmail("");
    setPassword("");
  };

  const HandleSignupButton = async (e) => {
    e.preventDefault();
    // console.log("Signup");'
    Signup(
      username,
      email,
      password,
      phoneNumber,
      storeLocation,
      storeName
    ).then((response) => {
      navigate("/home");
      console.log(response);
      console.log("successfully signup", response);
    });
  };

  const HandleSigninButton = (e) => {
    e.preventDefault();
    Signin(email, password).then((response) => {
      navigate("/home");
      console.log(response);
      console.log("successfully signup", response);
    });
  };
  return (
    <div className="container" id="container">
      {/* Signup Form */}
      <div className="form-container sign-up-container">
        <form action="" onSubmit={HandleSignupButton}>
          <h1>Create Account</h1>
          <span>or use your email for registration</span>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          ></input>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          ></input>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          ></input>
          <input
            type="tel"
            name="phone-number"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          ></input>
          <input
            type="text"
            name="store-name"
            placeholder="Store Name"
            value={storeName}
            onChange={(e) => setStoreName(e.target.value)}
            required
          ></input>
          <input
            type="text"
            name="store-location"
            placeholder="Store Location"
            value={storeLocation}
            onChange={(e) => setStoreLocation(e.target.value)}
            required
          ></input>
          <button id="signup-button">SignUp</button>
        </form>
      </div>
      {/* Signin Form */}
      <div className="form-container sign-in-container">
        <form action="#" onSubmit={HandleSigninButton}>
          <h1>Sign In</h1>
          <span>with your account</span>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          ></input>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          ></input>
          <a href="#">Forgot Password?</a>
          <button>Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome to Restaurant POS System</h1>
            <p>Enter your personal info to sign up account</p>
            <p class="test">
              <span>OR</span>
            </p>
            <p>Already Have account ?</p>
            <button
              class="ghost"
              id="signIn"
              onClick={() => clickSigninButton()}
            >
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Welcome Back to Restaurant POS System</h1>
            <p>Sign in to continue access our system</p>
            <p class="test">
              <span>OR</span>
            </p>
            <p>Don't have account yet?</p>
            <button
              className="ghost"
              id="signUp"
              onClick={() => clickSignupButton()}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
