import './NotFound.css'
import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="not-found">
            <h1>404-Page Not Found!</h1>
            <p>How did you get here????</p>
            <Link to="/">Go back to the homepage!</Link>
        </div>
    );
}

export default NotFound;