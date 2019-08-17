import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "./components/Grid";
import Navbar from "./components/Navbar";
import Favorites from "./pages/FavoritesPage";
import Home from "./pages/HomePage";
import Signup from "./pages/SignupPage";
import Login from "./pages/LoginPage";
import Concerts from "./pages/ConcertsPage";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";

const App = () => (
    <>  
        <Router>
            <Navbar />
                <div className="main">
                    <Container>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/signup" component={Signup} />
                            <Route path="/login" component={Login} />
                            <Route path="/favorites" component={Favorites} />
                            <Route path="/concerts" component={Concerts} />
                            <Route component={NotFound} />
                        </Switch>
                    </Container>
                </div>
            <Footer />
        </Router>
    </>
);

export default App;