import React, { useState } from "react";
import { connect } from "react-redux";

const SOS = ({ show }) => {
  const [showSOS, setShowSOS] = useState(show);

  setTimeout(() => {
    setShowSOS("none");
  }, 3000);

  return (
    <div
      className="bg-danger"
      style={{
        position: "absolute",
        top: "0",
        display: showSOS,
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        flexDirection: "column",
        zIndex: "1000",
      }}
    >
      SOS !!!
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  sos: state.sos,
});

export default connect(mapStateToProps, {})(SOS);
