import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProfileItem = ({ profile }) => {
  console.log(profile);
  return (
    <div className="profile bg-light">
      {/* <div>
        <h2>{name}</h2>
        <p>{profession}</p>
        <Link to={`profile/${_id}`} className="btn btn-primary">
          View Profile
        </Link>
      </div>
      <ul>
        {hobbies.slice(0, 4).map((hobby, index) => (
          <li key={index} className="text-primary">
            <i className="fas fa-check"></i> {hobby}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
