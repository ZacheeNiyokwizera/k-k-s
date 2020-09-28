import React, { Component } from "react";
import logo from "./g-logo.svg";
import "./App.css";
import Usurvey from "./Usurvey";

class App extends Component {
    render() {
        return ( <
            div className = "App" >
            <
            div className = "App-header" >
            <
            img src = { logo }
            className = "App-logo"
            alt = "logo" / >
            <
            h2 > Welcome to Kuja Kuja survey
            for Kuja Kujans: ( < /h2>{" "} <
                /div>{" "} <
                Usurvey / >
                <
                /div>
            );
        }
    }

    export default App;