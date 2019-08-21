import React from "react";
import "./Card.css";

const Card = ({ title, Button, children }) => (
    <div className="card my-4">
        {Button ? (
            <div className="card-header d-flex">
                <span>{title}</span>
                <Button />
            </div>
            ) : 
            <div className="card-header">
                {title}
            </div>
        }
        <div className="card-body">
            {children}
        </div>
    </div>
)

export default Card;