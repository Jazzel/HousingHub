import store from "./store";
import { Provider } from "react-redux";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
import { useEffect, useLayoutEffect } from "react";
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

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
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
              <Route path="confirm/:email/:code" element={<ConfirmAccount />} />
              <Route path="reset/:email/:code" element={<EmailCode />} />
              <Route path="email-sent/:email" element={<EmailSent />} />
              <Route path="about" element={<About />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </Wrapper>
      </Router>
    </Provider>
  );
};

export default App;
