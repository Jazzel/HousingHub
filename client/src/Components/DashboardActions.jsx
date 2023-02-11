import React from "react";
import { Link } from "react-router-dom";

const DashboardActions = () => {
  return (
    <>
      <div className="btn-groups">
        <Link to="/edit-profile" className="btn btn-primary">
          <i className="fas fa-user-circle text-primary"></i> Edit Profile
        </Link>
        <span className="m-1" />
        <Link to="/add-experience" className="btn btn-primary">
          <i className="fab fa-black-tie text-primary"></i> Add Experience
        </Link>
        <span className="m-1" />

        <Link to="/add-education" className="btn btn-primary">
          <i className="fas fa-graduation-cap text-primary"></i> Add Education
        </Link>
        <span className="m-1" />
        <Link to="/add-hobby" className="btn btn-primary">
          <i className="fas fa-graduation-cap text-primary"></i> Add Hobby
        </Link>
      </div>
    </>
  );
};

export default DashboardActions;
