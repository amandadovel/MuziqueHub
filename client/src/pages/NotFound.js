import React from "react";
import Jumbotron from "../components/Jumbotron";
import "./style.css";

const NotFound = () => (
    <>  
        <Jumbotron>
            <h1>404 Page Not Found</h1>
            <h1>
                <span role="img" aria-label="Face With Rolling Eyes Emoji">🙄</span>
            </h1>
        </Jumbotron>
    </>
);

export default NotFound;