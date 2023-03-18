import React from "react";
import { useState,  useEffect} from "react";
import { useNavigate } from 'react-router-dom'
import {BsFillQuestionCircleFill} from 'react-icons/bs'
import Logoimage from "../../../Assets/Logoimage.png";
import validation from "./Validation";
import {Link} from 'react-router-dom'
import "./Signup.css";


const Signup = ({submitForm}) => {


const [values, setValues] =useState({
  firstname: "",
  lastname: "",
  email: "",
  phonenumber: "",
  password: "",
});

const [errors, setErrors] = useState({});
const [dataIsCorrect, setDataIsCorrect] = useState (false)

const handleChange = (event) => {
  setValues({
    ...values,
    [event.target.name]: event.target.value,
  });
};
const navigate = useNavigate()
const handleFormSubmit = (event) =>{
  event.preventDefault()
  setErrors(validation(values));
  setDataIsCorrect(true)
  navigate('/Home_page')
};

useEffect(() => {
  if (Object.keys(errors).length === 0 && dataIsCorrect) {
    submitForm(true);
    
  }
}, [errors])

  return (
    <>
      <div className="signup__wrapper">
        <div className="signup__logo">
          <img src={Logoimage} alt="/" />
        </div>
        <div className="signup__container">
          <h2>Create an account</h2>

          <div className="signup__inputs">
            <div className="name">
              <label className="label">First Name</label>
              <input
                className="input"
                type="text"
                name="firstname"
                placeholder="Enter your first name"
                value={values.firstname}
                onChange={handleChange}
              />
               {errors.firstname && <p className="error">{errors.firstname}</p>}
            </div>

            <div className="name">
              <label className="label">Last Name</label>
              <input
                className="input"
                type="text"
                name="lastname"
                placeholder="Enter your lastname"
                value={values.lastname}
                onChange={handleChange}
              />
               {errors.lastname && <p className="error">{errors.lastname}</p>}
            </div>

            <div className="email">
              <label className="label">Email Address</label>
              <input
                className="input"
                type="text"
                name="email"
                placeholder="Enter email address"
                value={values.email}
                onChange={handleChange}
              />
               {errors.email && <p className="error">{errors.email}</p>}
            </div>

            <div className="name">
              <label className="label">Phone Number</label>
              <input
                className="input"
                type="text"
                name="phonenumber"
                placeholder="Enter your phone number"
                value={values.phonenumber}
                onChange={handleChange}
              />
               {errors.phonenumber && <p className="error">{errors.phonenumber}</p>}
            </div>

            <div className="password">
              <label className="label">Password</label>
              <input
                className="input"
                type="password"
                name="password"
                placeholder="Enter your password"
                value={values.password}
                onChange={handleChange}
              />
               {errors.password && <p className="error">{errors.password}</p>}

              <p id="password__terms">(Use alphabets, numbers and characters)</p>
            </div>
          </div>
          <div className="signup__btn1">
            <button className="signup__btn2" onClick={handleFormSubmit}>Get Started</button>
            <button className="signup__btn3">Sign up with google</button>
          </div>
          <div className="signup__terms">
            <p>
              By continuing, you agree to the
              <a href="/"> Terms of Service & Privacy Policy.</a>
            </p>
            <p>
              Already have an account,<Link to='Login'>Login</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
