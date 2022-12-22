import React, { useRef } from "react";
import { NavLink } from "react-router-dom";

export default function Login(props) {

  const userLoginRef = useRef({
    email:'',
    password:''
  });

  const handleChange = (e) =>{
    const {value,id} = e.target;
    userLoginRef.current[id] = value;
  };

  const handleSubmit = async (e) =>{
    e.preventDefault();
  }

  return (
    <form className="container mt-5 mb-5 " onChange={handleSubmit}>
      <h3>Login</h3>

      <div className="content w-25 mx-auto">
        <div className="form-group ">
          <p>Email</p>
          <input className="form-control" id="email" name="email" placeholder="email" onChange={handleChange}/>

          <p className="text text-danger">Validation</p>
        </div>
        <div className="form-group">
          <p>Password</p>
          <input
            className="form-control"
            id="password"
            name="password"
            type={"password"}
            placeholder="password"
            onChange={handleChange}
          />

          <p className="text text-danger">Validation</p>
        </div>
      <div className="button">
        <div className="register-now">
          <NavLink className={"register-link"} to="/register">
            Register now ?
          </NavLink>
        </div>

        <div className="form-group">
          <button className="btn mt-2" type="submit">
            LOGIN
          </button>
        </div>
        </div>
      </div>
    </form>
  );
}
