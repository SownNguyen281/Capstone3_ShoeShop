import React from "react";

export default function Register() {
  return (
    <form className="container">
      <h3>Register</h3>

      <div className="form-content">
        <div className="form-group ">
          <p>Email</p>
          <input
            className="form-control"
            id="email"
            name="email"
            placeholder="Email"
          />
          <p className="text text-danger">Validation</p>
        </div>
        <div className="form-group ">
          <p>Password</p>
          <input
            className="form-control"
            id="password"
            name="password"
            type={"password"}
            placeholder="Password"
          />

          <p className="text text-danger">Validation</p>
        </div>
        <div className="form-group ">
          <p>Password Confirm</p>
          <input
            className="form-control"
            id="pass-confirm"
            name="pass-confirm"
            type={"password"}
            placeholder="Password confirm"
          />

          <p className="text text-danger">Validation</p>
        </div>
        <div className="form-group ">
          <p>Name</p>
          <input
            className="form-control"
            id="name"
            name="name"
            placeholder="Name"
          />

          <p className="text text-danger">Validation</p>
        </div>
        <div className="form-group ">
          <p>Phone</p>
          <input
            className="form-control"
            id="phone"
            name="phone"
            type={"tel"}
            placeholder="Phone"
          />

          <p className="text text-danger">Validation</p>
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
            <button className="btn mt-2" type="submit">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
