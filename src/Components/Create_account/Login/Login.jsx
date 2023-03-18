import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logoimage from "../../../Assets/Logoimage.png";
import Validate from "./Validate.jsx";
import "./Login.css";
import validate from "./Validate.jsx";

const Login = ({submit}) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  

  const [errors, setErrors] = useState({})

  const [correctData, setCorrectData] = useState(false)

  const handleChamge = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(values));
    setCorrectData(true)
  };
  useEffect(() => {
    if(Object.keys(errors).length ===0 && correctData){
      submit(true);
    }
  }, [errors])
  return (
    <>
      <div className="login__section">
        <div className="login__logo">
          <img src={Logoimage} alt="logo" />
        </div>

        <div className="login__container">
          <h2>Welcome back!</h2>
          <div className="login">
            <div className="login__email">
              <label className="login__label">Email Address</label>
              <input
                className="login__input"
                type="text"
                name="email"
                placeholder="Enter Email Address"
                value={values.email}
                onChange={handleChamge}
              />
              {errors.email && <p className="errors">{errors.email}</p>}
            </div>

            <div className="login__password">
              <label className="login__label">Password</label>
              <input
                className="login__input"
                type="password"
                name="password"
                placeholder="Enter your password"
                value={values.password}
                onChange={handleChamge}
              />
              {errors.password && <p className="errors">{errors.password}</p>}
              <p>
                <Link to="./" id="links">
                  forgot password?
                </Link>
              </p>
            </div>
          </div>
          <div className="login__buttons">
            <button id="login__btn" onClick={handleSubmit}>
              Login
            </button>
            <button id="btn__login">Login with google</button>
          </div>
          <p id="p">
            Don’t have an account,
            <Link to="/" id="link">
              Sign Up
            </Link>{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
