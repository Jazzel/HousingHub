import React, { useState } from "react";
import { connect } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import { setAlert } from "../actions/alert";
import { register } from "../actions/auth";

const Register = ({ register }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password2: "",
    nic: "",
    name: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password === formData.password2) {
      const response = await register(formData);
      if (response === 200) {
        navigate(`/email-sent/${formData.email}`);
      }
    } else {
      setAlert("Passwords do not match", "danger");
    }
  };

  return (
    <div className="row">
      <div className="col-12 col-md-6 shadow-lg"></div>
      <div
        className="col-12 col-md-6 "
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          height: "100vh",
          flexDirection: "column",
        }}
      >
        <h1 className="text-center styled-font">HousingHub</h1>
        <br />
        <h3 className="text-center">Register</h3>
        <hr />
        <form className="w-100" onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            className="form-control w-50 m-auto mb-2"
            placeholder="Enter name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            className="form-control w-50 m-auto mb-2"
            placeholder="Enter email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="number"
            className="form-control w-50 m-auto mb-2"
            placeholder="Enter nic"
            name="nic"
            value={formData.nic}
            onChange={handleChange}
          />

          <input
            type="password"
            className="form-control  w-50 m-auto  mb-2"
            placeholder="Enter password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <input
            type="password"
            className="form-control w-50 m-auto mb-2"
            placeholder="Confirm password"
            name="password2"
            value={formData.password2}
            onChange={handleChange}
          />

          <center>
            <button className="btn w-50 m-auto btn-dark" type="submit">
              Register
            </button>
            <br />
            <div className="text-center">
              Already a user?{" "}
              <Link className="text-dark" to="/login">
                Login here.
              </Link>
            </div>
          </center>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { register })(Register);
