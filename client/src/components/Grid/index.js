import React from "react";
import "./Grid.css";

export const Container = ({ fluid, children }) => (
    <div className={`container${fluid ? "-fluid" : ""}`}>
        {children}
    </div>
);

export const Row =({ center, children }) => (
    <div className={`row${center ? " justify-content-center" : ""}`}>
        {children}
    </div>
);

export const Col = ({ size, children }) => (
    <div className={size.split(" ").map(size => "col-" + size).join(" ")}>
        {children}
    </div>
);
