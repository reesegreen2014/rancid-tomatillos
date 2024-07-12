import './NotFound.css'
import React from "react";
import { Link } from "react-router-dom";
import confusedImage from '../Images/confused.png'

function NotFound() {
    return (
        <div className="not-found">
            <h1>404-Page Not Found!</h1>
            <img src={confusedImage} alt="Confused" className="not-found-image" />
            <p>How did you get here????</p>
            <Link to="/">Go back to the homepage!</Link>
        </div>
    );
}

export default NotFound;