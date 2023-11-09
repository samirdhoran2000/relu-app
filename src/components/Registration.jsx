import "./registration.css";
import {useNavigate} from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { initializeApp,  } from 'firebase/app';
import { app } from "../firebase";
import { useState } from "react";

const auth = getAuth(app);

const Registration = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSignUp = () => {
    const data = { email, password };
    console.log(data);
    createUserWithEmailAndPassword(auth, email, password)
      .then((data) => {
        console.log("res data", data);
        alert("Registration Successful!!! Please Login with your Email and Password");
      })
      .catch((err) => {
        console.log("something went wrong ", err.message);
        if (err.message.includes("email-already-in-use")) {
          alert("Email Already Exists");
        }
      });
  };

  return (
    <>
      {/* <div>Registration</div>
            <button onClick={() => { signUpUser(); console.log('log');}}>
                Sign Up
            </button> */}

      <div className="main-registration-outer-container">
        <div className="main-registration-inner-container-primary">
          <div>
            <div className="main-registration-inner-container-secondary">
              <h2
                style={{
                  color: "#88C2BB",
                }}
              >
                Sign Up
              </h2>
              <div className="lable-input-pair">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="Enter your Email"
                  name="email"
                  id="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="lable-input-pair">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  placeholder="Enter your Password"
                  name="password"
                  id="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="sign-up-button">
            <button
              onClick={() => {
                onSignUp();
              }}
            >
              Sign Up
            </button>
          </div>
          <div
            style={{
              fontSize: "12px",
              cursor: "pointer",
              color: "rgb(183, 198, 255)",
            }}
            onClick={()=>{navigate('/')}}
          >
            Login Here
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
