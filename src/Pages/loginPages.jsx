import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth, provider } from "../API/firebase";
import { signInWithPopup } from "firebase/auth";
import "../Style/loginStyles.css";

const LoginPages = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleGoogleSignin = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
      value ? navigate("/") : alert("Verify Your Google Account");
    });
  };
  //   console.log(value);

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  }, []);

  return (
    <div className="page">
      <div className="cover">
        <h1>Login</h1>
        <input type="text" placeholder="UserName" />
        <input type="password" placeholder="Password" />

        <button className="login-btn">Login</button>
        <p className="text">Or Login using</p>

        <div className="alt-login">
          <div className="google" onClick={handleGoogleSignin}></div>
          <div className="linkedin"></div>
        </div>
      </div>
    </div>
  );
};

export default LoginPages;
