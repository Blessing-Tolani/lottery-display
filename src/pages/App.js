import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import LoginContainer from "../components/Container/LoginContainer";
import RegisterContainer from "../components/Container/RegisterContainer";

// import Login from '.../components/user/Login';
// import Homepage from '.../components/user/Homepage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginContainer />} />
        <Route exact path="register" element={<RegisterContainer />} />
      </Routes>

      {/* <Route path="/login"  component={Login} />
        <PrivateRoute path="/"  component={Homepage} /> */}
    </Router>
  );
};

export default App;
