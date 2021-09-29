import React from "react";
import {
    Link
} from "react-router-dom";
import "../App.css"

function Nav() {
    return (
        <nav>
            <ul className="navul">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/animal-api">Animal</Link>
                </li>
                <li>
                    <Link to="/snacks">Snacks</Link>
                </li>
                <li>
                    <Link to="/sign-up">sign-up</Link>
                </li>
                <li>
                    <Link to="/Login">log-in</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;
