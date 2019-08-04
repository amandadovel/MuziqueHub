import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const App = () => (
    <>
        <Router>
            <Switch>
                <Route exact path="/" component={Profile} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/login" component={Login} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    </>
);

export default App;