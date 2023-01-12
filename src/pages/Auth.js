import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Signup, Signin } from "../services/auth-service";
import { createContext } from "react";
import "./Auth.css";

export const TokenContext = createContext();

const Auth = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const [storeName, setStoreName] = useState("");
  const [storeLocation, setStoreLocation] = useState("");
  const [tokens, setTokens] = useState();
  const navigate = useNavigate();

  const clickSignupButton = () => {
    document
      .getElementById("container-auth")
      .classList.add("right-panel-active");
    setEmail("");
    setPassword("");
  };
  const clickSigninButton = () => {
    document
      .getElementById("container-auth")
      .classList.remove("right-panel-active");
    setEmail("");
    setPassword("");
  };

  const HandleSignupButton = async (e) => {
    e.preventDefault();
    Signup(
      username,
      email,
      password,
      phoneNumber,
      storeLocation,
      storeName
    ).then((response) => {
      if (
        response.status === 200 &&
        response.data.message === "successful signup"
      ) {
        navigate("/home");
      }
      console.log("successfully signup", response);
    });
  };
  const handleSignin = () => {
    // setTokens("test");
    const token = Signin(email, password).then((response) => {
      // setTokens(response.data.results);
      if (response.status === 200) {
        console.log(response.data.results);
        localStorage.setItem("user", response.data.results);
        navigate("/home");
      }
      console.log("successfully signin", response);
    });
  };

  useEffect(() => {
    console.log("storage token", localStorage.getItem("user"));
  }, []);

  return (
    <TokenContext.Provider value={tokens}>
      <div className="body">
        <div className="container-auth" id="container-auth">
          {/* Signup Form */}
          <div className="form-container sign-up-container">
            <form className="form" onSubmit={HandleSignupButton}>
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
              <button id="signup-button" className="button">
                Sign Up
              </button>
            </form>
          </div>
          {/* Signin Form */}
          <div className="form-container sign-in-container">
            <div className="form">
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
              {/* <button type="submit" className="button">
                Sign In
              </button> */}
              <button className="button" onClick={() => handleSignin()}>
                Sign In Test
              </button>
            </div>
          </div>

          {/* --- Overlay Form --- */}
          <div className="overlay-container">
            <div className="overlay">
              {/* --- Overlay left Sign in --- */}
              <div className="overlay-panel overlay-left">
                <h1>Welcome to Restaurant POS System</h1>
                <p>Enter your personal info to sign up account</p>
                <p class="test">
                  <span>OR</span>
                </p>
                <p>Already Have account ?</p>
                <button
                  class="ghost button"
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
                  className="ghost button"
                  id="signUp"
                  onClick={() => clickSignupButton()}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TokenContext.Provider>
  );
};

export default Auth;
