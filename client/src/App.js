import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "./components/Grid";
import Navbar from "./components/Navbar";
import Favorites from "./pages/FavoritesPage";
import Videos from "./pages/VideoPage";
import Home from "./pages/HomePage";
import Signup from "./pages/SignupPage";
import Login from "./pages/LoginPage";
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
                    <Route path="/favorites" component={Favorites} />
                    <Route path="/videos" component={Videos} />
                    <Route component={NotFound} />
                </Switch>
            </Container>
        </Router>
    </>
);

export default App;