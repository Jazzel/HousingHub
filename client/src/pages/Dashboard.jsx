import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import { getCurrentProfile, deleteAccountAndProfile } from "../actions/profile";
import DashboardActions from "../Components/DashboardActions";
import Experience from "../Components/Experience";
import Education from "../Components/Education";
import Hobby from "../Components/Hobby";
import PropTypes from "prop-types";
import { createSos } from "../actions/sos";
import SOS from "./SOS";
import { createSignal } from "react-signal";
import { Signal } from "../App";

function Publisher({ id }) {
  const publish = Signal.usePublish();

  return (
    <button
      className="btn btn-danger"
      onClick={() => {
        createSos(id);
        publish("show");
      }}
    >
      GENERATE SOS
    </button>
  );
}

function Subscriber({ children }) {
  const [showSOS, setShowSOS] = useState(false);

  Signal.useSubscription((message) => {
    setShowSOS(message === "show");
  });
  return showSOS && <SOS />;
}

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
  deleteAccountAndProfile,
  createSos,
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);
  return loading && profile === null ? (
    <Spinner />
  ) : (
    <>
      <h1 className="large text-primary">Dashboard</h1>

      <br />
      {user && <Publisher id={user._id} />}
      <Subscriber />
      <p className="lead">
        <i className="fa fa-user"></i> Welcome {user && user.name}
      </p>
      {profile !== null ? (
        <>
          <h4>Profession: {profile.profession}</h4>
          <DashboardActions />
          <Experience experience={profile.experience || []} />
          <Education education={profile.education || []} />
          <Hobby hobby={profile.hobbies || []} />
          <div className="my-2">
            <button
              className="btn btn-danger"
              onClick={() => deleteAccountAndProfile()}
            >
              <i className="fas fa-user-minus"></i> Delete my account
            </button>
          </div>
        </>
      ) : (
        <>
          <p>You have not yet setup a profile, please add some information.</p>
          <Link to="/create-profile" className="btn btn-primary my-1">
            Create profile
          </Link>
        </>
      )}
    </>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  deleteAccountAndProfile: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, {
  getCurrentProfile,
  deleteAccountAndProfile,
  createSos,
})(Dashboard);
