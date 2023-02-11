import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteHobby } from "../actions/profile";
import { Moment } from "../pages/profileForms/ProfileEducation";

const Hobby = ({ hobby, deleteHobby }) => {
  const hobbies = hobby.map((hobby) => (
    <tr key={hobby._id}>
      <td>{hobby.title}</td>
      <td>
        <button
          onClick={() => deleteHobby(hobby._id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <>
      <h2 className="my-2">Hobby Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th />
          </tr>
        </thead>
        <tbody>{hobbies}</tbody>
      </table>
    </>
  );
};

Hobby.propTypes = {
  hobby: PropTypes.array.isRequired,
  deleteHobby: PropTypes.func.isRequired,
};

export default connect(null, { deleteHobby })(Hobby);
