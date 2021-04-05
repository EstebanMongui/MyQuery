import React, { useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar"
import "./Statistics.scss"
import StatisticsBox from "../../components/StatisticsBox/StatisticsBox"
import { ds, queriesAccount } from "../../modules/dataAnalitycs"

function Statistics(props){

    useEffect(()=>{
        queriesAccount()
    }, [])

    return(
        <React.Fragment>
            <section className="Statistics">
                <NavBar />
                <div className="StatisticsBox__Container">
                    <StatisticsBox ds= {ds} />
                </div>
            </section>
        </React.Fragment>
    );
};

export default Statistics;