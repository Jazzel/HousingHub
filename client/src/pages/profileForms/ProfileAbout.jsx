import React from "react";
import PropTypes from "prop-types";

const ProfileAbout = ({
  profile: {
    bio,
    hobbies,
    user: { name },
  },
}) => (
  <div className="profile-about bg-light p-2">
    {bio && (
      <>
        <h2 className="text-primary">{name.trim().split(" ")}'s Bio</h2>
        <p>{bio}</p>
        <div className="line"></div>
      </>
    )}
    <h2 className="text-primary">Hobbies</h2>
    <div className="skills">
      {hobbies.length > 0 ? (
        hobbies.map((hobby, index) => (
          <div className="p-1" key={index}>
            <i className="fa fa-check"></i> {hobby.title}
          </div>
        ))
      ) : (
        <h4>No hobby credentials</h4>
      )}
    </div>
  </div>
);

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileAbout;
