import { connect } from "react-redux";
import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Alert from "../Components/Alert";
import PropTypes from "prop-types";
import { verifyCode } from "../actions/auth";
import { setAlert } from "../actions/alert";

const EmailCode = ({ setAlert, verifyCode }) => {
  const { email, code } = useParams();
  const navigate = useNavigate();
  const [authCode, setAuthCode] = React.useState(code);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await verifyCode({ code, email });
    if (res) {
      navigate(`/change-password/${email}/${code}`);
    } else {
      setAlert("Given code is incorrect", "danger");
    }
  };

  return (
    <div className="row">
      <div
        className="col-12 col-md-6 shadow-lg"
        style={{
          backgroundImage: `url(${require("../assets/imgs/henry-becerra-rwpKI0ULWmQ-unsplash.jpg")})`,
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
          style={{
            // backgroundImage: `url(${require("./../assets/login-banner.webp")})`,
            height: "150px",
            width: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "5px",
          }}
        >
          <h1 className="text-center styled-font">HousingHub</h1>
          <br />
        </div>
        <div
          className="col-12"
          style={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            borderRadius: "5px",
          }}
        >
          <div className="p-4">
            <h1 className="text-center">Email Sent</h1>
            <br />
            <h6 className="text-center">
              An email is sent to '{email}'. <br /> Please check your inbox for
              the verification link.
            </h6>
            <div className="mt-2 text-center">
              <Link
                className="text-dark"
                style={{
                  textDecoration: "none",
                }}
                to="/login"
              >
                Go back to Login page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {};

EmailCode.propTypes = {
  verifyCode: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { verifyCode, setAlert })(EmailCode);
