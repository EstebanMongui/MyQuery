import React from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom"

import logo from "../../assets/images/logo.png"

function NavBar(props){
    return(
        <div className="NavBar">
            <Link to="/">
                <figure className="__Logo">
                    <img src={logo} alt="Logo"/>
                </figure>
            </Link>
            <nav className="__Menu">
                <ul>
                    <Link to="/Statistics">
                        <li>
                                Estadísticas
                        </li>
                    </Link>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;