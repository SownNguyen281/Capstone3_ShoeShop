import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProfileApi, updateProfileAction } from '../../redux/reducers/userReducer';
import { useFormik } from 'formik';
import * as yup from "yup";


export default function Profile(props) {


  const {userProfile} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    //Gọi api get profile
    const actionAsync = getProfileApi();
    dispatch(actionAsync);
  },[]);

  const frmProfile = useFormik({
    initialValues:{
      email:"",
      password:"",
      name:"",
      phone:"",
    },
    validationSchema: yup.object().shape({
      email: yup.string().email("email is invalid"),
      password:yup.string().min(3,"password must be at least 3 character"),
      name: yup.string().max(40).matches(/^([a-vxyỳọáầảấờễàạằệếýộậốũứĩõúữịỗìềểẩớặòùồợãụủíỹắẫựỉỏừỷởóéửỵẳẹèẽổẵẻỡơôưăêâđ]+)((\s{1}[a-vxyỳọáầảấờễàạằệếýộậốũứĩõúữịỗìềểẩớặòùồợãụủíỹắẫựỉỏừỷởóéửỵẳẹèẽổẵẻỡơôưăêâđ]+){1,})$/,"your name is invalid"),
      phone: yup.string().max(11).matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/, 'phone must be number')
    }),
    onSubmit: (values) => {
      const actionAsyncUpdate = updateProfileAction(values);
      dispatch(actionAsyncUpdate);
    },
  })


  return (
    <div className='container' onSubmit={frmProfile.handleSubmit}>
      <h3>Profile</h3>
      <div className='row'>
        <div className='col-4 avatar'>
          <img src="https://i.pravatar.cc" style={{height:250}} alt="..." className="w-100" />
        </div>
        <div className='col-8'>
          <div className='row'>
            <div className='col-6'>
            <div className="form-group ">
          <p>Email</p>
          <input
            className="form-control"
            id="email"
            name="email"
            placeholder="Email"
            onChange={frmProfile.handleChange}
            onBlur={frmProfile.handleBlur}
          />
          <p className="text text-danger">{frmProfile.errors.email}</p>
        </div>
        <div className="form-group ">
          <p>Password</p>
          <input
            className="form-control"
            id="password"
            name="password"
            type={"password"}
            placeholder="Password"
            onChange={frmProfile.handleChange}
            onBlur={frmProfile.handleBlur}
          />
          <p className="text text-danger">{frmProfile.errors.password}</p>
        </div>
            </div>
            <div className='col-6'>
            <div className="form-group ">
          <p>Name</p>
          <input
            className="form-control"
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            onChange={frmProfile.handleChange}
            onBlur={frmProfile.handleBlur}
          />
          <p className="text text-danger">{frmProfile.errors.name}</p>
        </div>
        <div className="form-group ">
          <p>Phone</p>
          <input
            className="form-control"
            id="phone"
            name="phone"
            type={"tel"}
            placeholder="Phone"
            onChange={frmProfile.handleChange}
            onBlur={frmProfile.handleBlur}
          />
          <p className="text text-danger">{frmProfile.errors.phone}</p>
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
            <button className="btn mt-2" type="submit" >
              UPDATE
            </button>
          </div>
        </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
