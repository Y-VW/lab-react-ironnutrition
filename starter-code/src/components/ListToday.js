import React, { Component } from "react";

import "./ListToday.css"

class ListToday extends Component {
    render() {
        return (
            <div className="list-today">
                <h1>Today's Foods</h1>
                <ul>
                    <li></li>
                </ul>
                <p>Total: 0 cal</p>
            </div>
        )
    }
}

export default ListToday;