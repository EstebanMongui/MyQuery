import React from "react";
import NavBar from "../../components/NavBar/NavBar"
import "./Statistics.scss"
import StatisticsBox from "../../components/StatisticsBox/StatisticsBox"

function Statistics(props){
    return(
        <React.Fragment>
            <section className="Statistics">
                <NavBar />
                <div className="StatisticsBox__Container">
                    <StatisticsBox />
                </div>
            </section>
        </React.Fragment>
    );
};

export default Statistics;