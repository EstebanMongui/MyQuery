import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from "./pages/Home/Home"
import Statistics from "./pages/Statistics/Statistics"


function App(){
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Statistics" component={Statistics} />
            </Switch>
        </Router>
    )   
}

export default App;