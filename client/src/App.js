import store from "./store";
import { Provider } from "react-redux";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
import { useEffect, useLayoutEffect, useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
import PrivateRoute from "./routing/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ConfirmAccount from "./pages/ConfirmAccount";
import EmailCode from "./pages/EmailCode";
import EmailSent from "./pages/EmailSent";
import EditProfile from "./pages/profileForms/EditProfile";
import AddExperience from "./pages/profileForms/AddExperience";
import AddEducation from "./pages/profileForms/AddEducation";
import AddHobby from "./pages/profileForms/AddHobby";
import CreateUserProfile from "./pages/CreateUserProfile";
import Profile from "./pages/profileForms/Profile";

import { createSignal } from "react-signal";
import SOS from "./pages/SOS";
import Profiles from "./pages/Profiles";

export const HOST = "http://localhost:5000";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

export const Signal = createSignal();

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Signal.Provider>
      <Provider store={store}>
        <Router>
          <Wrapper>
            <Routes>
              <Route path="/*">
                <Route index element={<Home />} />
                <Route
                  path="dashboard"
                  index
                  element={
                    <PrivateRoute>
                      <Dashboard />
                    </PrivateRoute>
                  }
                />

                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="forgot-password" element={<ForgotPassword />} />
                <Route exact path="profiles" element={<Profiles />} />
                <Route exact path="profile/:id" element={<Profiles />} />
                <Route
                  path="confirm/:email/:code"
                  element={<ConfirmAccount />}
                />
                <Route path="reset/:email/:code" element={<EmailCode />} />
                <Route path="email-sent/:email" element={<EmailSent />} />

                <Route path="dashboard" element={<Dashboard />} />

                <Route
                  exact
                  path="create-profile"
                  element={
                    <PrivateRoute>
                      <CreateUserProfile />
                    </PrivateRoute>
                  }
                />

                <Route
                  path="edit-profile"
                  element={
                    <PrivateRoute>
                      <EditProfile />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="add-experience"
                  element={
                    <PrivateRoute>
                      <AddExperience />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="add-education"
                  element={
                    <PrivateRoute>
                      <AddEducation />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="add-hobby"
                  element={
                    <PrivateRoute>
                      <AddHobby />
                    </PrivateRoute>
                  }
                />

                <Route
                  exact
                  path="profile/:id"
                  element={
                    <PrivateRoute>
                      <Profile />
                    </PrivateRoute>
                  }
                />

                <Route path="about" element={<About />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Route>
            </Routes>
          </Wrapper>
        </Router>
      </Provider>
    </Signal.Provider>
  );
};

export default App;
