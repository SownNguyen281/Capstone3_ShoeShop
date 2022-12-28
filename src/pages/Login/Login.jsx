import React from "react";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { getLoginAsyncAction } from "../../redux/reducers/userReducer";
import LoginFacebook from "../../Components/LoginFacebook/LoginFacebook";

export default function Login(props) {
  const dispatch = useDispatch();
  const frmLogin = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .required("email is required !!")
        .email("email is invalid"),
      password: yup
        .string()
        .min(3, "password must be at least 3 to 10 character"),
    }),
    onSubmit: (values) => {
      const actionAsyncLogin = getLoginAsyncAction(values);
      dispatch(actionAsyncLogin);
    },
  });

  return (
    <form className="container mt-5 mb-5 " onSubmit={frmLogin.handleSubmit}>
      <h3>Login</h3>

      <div className="content w-25 mx-auto">
        <div className="form-group ">
          <p>Email</p>
          <input
            className="form-control"
            id="email"
            name="email"
            placeholder="email"
            onChange={frmLogin.handleChange}
            onBlur={frmLogin.handleBlur}
          />
          {frmLogin.errors.email && (
            <p className="text text-danger">{frmLogin.errors.email}</p>
          )}
        </div>
        <div className="form-group">
          <p>Password</p>
          
          <input
            className="form-control"
            id="password"
            name="password"
            type={"password"}
            placeholder="password"
            onChange={frmLogin.handleChange}
            onBlur={frmLogin.handleBlur}
          />
          {frmLogin.errors.password && (
            <p className="text text-danger">{frmLogin.errors.password}</p>
          )}
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
      
              <LoginFacebook/>
            
      </div>
    </form>
  );
}
