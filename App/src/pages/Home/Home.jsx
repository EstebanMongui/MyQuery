import React from "react";
import NavBar from "../../components/NavBar/NavBar"
import FilterBar from "../../components/FilterBar/FilterBar"
import QueryCard from "../../components/QueryCard/QueryCard"
import NewQueryBtn from "../../components/Buttons/NewQueryBtn/NewQueryBtn"
import "./Home.scss"

function Home(props){
    return(
        <React.Fragment>
            <section className="Home">
                <NavBar />
                <FilterBar />
                <QueryCard />
                <NewQueryBtn />
            </section>
        </React.Fragment>
    );
};

export default Home;