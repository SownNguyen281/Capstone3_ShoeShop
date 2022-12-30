import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import * as yup from "yup"
import { registerProfileAction } from "../../redux/reducers/userReducer";
export default function Register(props) {
  const dispatch = useDispatch();

  const frmRegister = useFormik({
    initialValues:{
      email:"",
      password:"",
      passwordconfirm:"",
      name:"",
      phone:"",
    },
    validationSchema: yup.object().shape({
      email: yup.string().email("email is invalid"),
      password:yup.string().min(3,"password must be at least 3 character"),
      passwordconfirm: yup.string().min(3,"Confirm pass must be like password"),
      name: yup.string().max(40).matches(/^([a-vxyỳọáầảấờễàạằệếýộậốũứĩõúữịỗìềểẩớặòùồợãụủíỹắẫựỉỏừỷởóéửỵẳẹèẽổẵẻỡơôưăêâđ]+)((\s{1}[a-vxyỳọáầảấờễàạằệếýộậốũứĩõúữịỗìềểẩớặòùồợãụủíỹắẫựỉỏừỷởóéửỵẳẹèẽổẵẻỡơôưăêâđ]+){1,})$/,"your name is invalid"),
      phone: yup.string().max(11).matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/, 'phone must be number'),
    }),
    onSubmit: (values) => {
      const actionAsyncUpdate = registerProfileAction(values);
      dispatch(actionAsyncUpdate);
    },
  })


  return (
    <form className="container" onSubmit={frmRegister.handleSubmit}>
      <h3>Register</h3>
      <div className="form-content">
        <div className="form-group ">
          <p>Email</p>
          <input
            className="form-control"
            id="email"
            name="email"
            placeholder="Email"
            onChange={frmRegister.handleChange}
            onBlur={frmRegister.handleBlur}
          />
          <p className="text text-danger">{frmRegister.errors.email}</p>
        </div>
        <div className="form-group ">
          <p>Password</p>
          <input
            className="form-control"
            id="password"
            name="password"
            type={"password"}
            placeholder="Password"
            onChange={frmRegister.handleChange}
            onBlur={frmRegister.handleBlur}
          />
          <p className="text text-danger">{frmRegister.errors.password}</p>
        </div>
        <div className="form-group ">
          <p>Password Confirm</p>
          <input
            className="form-control"
            id="pass-confirm"
            name="pass-confirm"
            type={"password"}
            placeholder="Password confirm"
            onChange={frmRegister.handleChange}
            onBlur={frmRegister.handleBlur}
          />
          <p className="text text-danger">{frmRegister.errors.passwordconfirm}</p>
        </div>
        <div className="form-group ">
          <p>Name</p>
          <input
            className="form-control"
            id="name"
            name="name"
            placeholder="Name"
            onChange={frmRegister.handleChange}
            onBlur={frmRegister.handleBlur}
          />
          <p className="text text-danger">{frmRegister.errors.name}</p>
        </div>
        <div className="form-group ">
          <p>Phone</p>
          <input
            className="form-control"
            id="phone"
            name="phone"
            type={"tel"}
            placeholder="Phone"
            onChange={frmRegister.handleChange}
            onBlur={frmRegister.handleBlur}
          />
          <p className="text text-danger">{frmRegister.errors.phone}</p>
        </div>
        <div className="gender">
          <div className="gender-content">
            <h5>Gender</h5>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                defaultValue="option1"
              />
              <label className="form-check-label" htmlFor="inlineRadio1">
                Male
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                defaultValue="option1"
              />
              <label className="form-check-label" htmlFor="inlineRadio1">
                Female
              </label>
            </div>
          </div>
          <div className="form-btn">
            <NavLink to={'/profile'} className="btn mt-2" type="submit">
              SUBMIT
            </NavLink>
          </div>
        </div>
      </div>
    </form>
  );
}
