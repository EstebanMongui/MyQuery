import React from "react";
import "./NavBar.scss";

import logo from "../../assets/images/logo.png"

function NavBar(props){
    return(
        <div className="NavBar">
            <figure className="__Logo">
                <img src={logo} alt="Logo"/>
            </figure>
            <nav className="__Menu">
                <ul>
                    <li>Estadisticas</li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;