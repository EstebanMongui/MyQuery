import React from "react";
import "./FilterBar.scss";

function FilterBar(){
    return(
        <nav className="FilterBar">
            <li>Técnicas</li>
            <li>Legales</li>
            <li>Administrativas</li>
            <li>Económicas</li>
        </nav>
    )
}

export default FilterBar;