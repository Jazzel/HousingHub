import { connect } from "react-redux";
import React from "react";
import { Link, Navigate } from "react-router-dom";
import { login } from "../actions/auth";
import PropTypes from "prop-types";
import Alert from "../Components/Alert";

const Login = ({ login, isAuthenticated, auth: { role } }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    login(email, password);
  };

  if (isAuthenticated) {
    if (role === "user") {
      return <Navigate to="/user-dashboard" />;
    } else {
      return <Navigate to="/dashboard" />;
    }
  }
  return (
    <div className="row">
      <div
        className="col-12 col-md-6 shadow-lg"
        style={{
          backgroundImage: `url(${require("../assets/imgs/adrien-olichon-asxhiRrZwGs-unsplash.jpg")})`,
          backgroundSize: "cover",
        }}
      ></div>
      <div
        className="col-12 col-md-6"
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          height: "100vh",
          flexDirection: "column",
        }}
      >
        <div
          className="col-12 col-md-6"
          style={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            borderRadius: "5px",
          }}
        >
          <h1 className="text-center styled-font">HousingHub</h1>
          <br />
          <h3 className="text-center mt-2 text-dark" style={{}}>
            Sign In
          </h3>
          <br />
          <form
            className="form m-auto"
            onSubmit={handleSubmit}
            style={{ width: "80%" }}
          >
            <Alert style={{ width: "80%" }} />

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                @
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="email"
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                **
              </span>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                aria-label="Password"
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-dark w-100">
                Login
              </button>
            </div>
            <div className="mt-2">
              <Link
                className="text-dark"
                style={{
                  textDecoration: "none",
                }}
                to="/forgot-password"
              >
                Forgot Password
              </Link>
            </div>
            <br />
            <div className="mt-2 text-center">
              Not a member?{" "}
              <Link className="text-dark" to="/register">
                Sign Up
              </Link>
            </div>
            <br />
          </form>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  user: PropTypes.object,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  auth: state.auth,
});

export default connect(mapStateToProps, { login })(Login);
