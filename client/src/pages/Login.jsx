import React from "react";

const Login = () => {
  return (
    <div className="row">
      <div className="col-md-6 offset-md-3"></div>
      <div className="col-md-6 offset-md-3">
        <h3 className="text-center">Login</h3>
        <hr />
        <form>
          <input
            type="email"
            className="form-control mb-2"
            placeholder="Enter email"
          />
          <input
            type="password"
            className="form-control mb-2"
            placeholder="Enter password"
          />
          <button className="btn btn-lg btn-dark btn-block" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
