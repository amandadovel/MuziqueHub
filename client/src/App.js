import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "./components/Grid";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Concerts from "./pages/Concerts";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const App = () => (
    <>  
        <Router>
            <Navbar />
            <Container>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/concerts" component={Concerts} />
                    <Route component={NotFound} />
                </Switch>
            </Container>
        </Router>
    </>
);

export default App;