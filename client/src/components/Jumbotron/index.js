import React from "react";
import "./Jumbotron.css";

const Jumbotron = ({ children }) => (
    <div className="jumbotron px-0">
        { children }
    </div>
)

export default Jumbotron;