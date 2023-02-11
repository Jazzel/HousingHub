import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addHobby } from "../../actions/profile";
import { Link, useNavigate } from "react-router-dom";

const AddHobby = ({ addHobby, history }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    company: "",
    title: "",
    location: "",
    from: "",
    to: "",
    current: false,
    description: "",
  });

  const { title } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const response = addHobby(formData, history);
    if (response) {
      navigate("/dashboard");
    }
  };

  return (
    <>
      <h1 class="large text-primary">Add Hobby/Interest</h1>
      <p class="lead">
        <i class="fas fa-code-branch"></i> Add any hobbies or interest that you
        have had in the past
      </p>
      <small>* = required field</small>
      <form class="form" onSubmit={(e) => onSubmit(e)}>
        <div class="form-group">
          <input
            type="title"
            placeholder="*  Title"
            name="title"
            required
            value={title}
            onChange={(e) => onChange(e)}
          />
        </div>
        <input type="submit" class="btn btn-primary my-1" value="Submit" />
        <Link class="btn btn-light my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
    </>
  );
};

AddHobby.propTypes = {
  addHobby: PropTypes.func.isRequired,
};

export default connect(null, { addHobby })(AddHobby);
