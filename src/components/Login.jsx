import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";
import './login2.css'


const Login = () => {

    const navigate=useNavigate();
  const googleClick = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    //   console.log(result);
      navigate('/blogs')
  };

  return (
    <>
      <div class="login-container">
        <a href="#" id="google-sign-in-button">
          <button onClick={googleClick} className="google-login">
            <img
              src="https://image.similarpng.com/very-thumbnail/2020/12/Google-icon-design-in-black-color-on-transparent-PNG.png"
              alt="Google Logo"
              class="google-logo"
            />
            Login with Google
          </button>
        </a>
      </div>
    </>
  );
};

export default Login;
