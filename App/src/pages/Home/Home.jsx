import React from "react";
import NavBar from "../../components/NavBar/NavBar"
import FilterBar from "../../components/FilterBar/FilterBar"
import QueryCard from "../../components/QueryCard/QueryCard"
import "./Home.scss"

function Home(props){
    return(
        <React.Fragment>
            <section className="Home">
                <NavBar />
                <FilterBar />
                <QueryCard />
            </section>
        </React.Fragment>
    );
};

export default Home;