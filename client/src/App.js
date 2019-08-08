import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "./components/Grid";
import Navbar from "./components/Navbar";
<<<<<<< HEAD
import Home from "./pages/Home";
import Artists from "./pages/ArtistPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
=======
import Home from "./pages/HomePage";
import Arists from "./pages/ArtistPage";
import Signup from "./pages/SignupPage";
import Login from "./pages/LoginPage";
>>>>>>> master
import NotFound from "./pages/NotFound";

const App = () => (
    <>  
        <Router>
            <Navbar />
            <Container>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/login" component={Login} />
<<<<<<< HEAD
                    <Route path="/artist" component={Artists} />
=======
                    <Route path="/artist" component={Arists} />
>>>>>>> master
                    <Route component={NotFound} />
                </Switch>
            </Container>
        </Router>
    </>
);

export default App;