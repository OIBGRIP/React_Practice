import React, { Component } from "react";

export class MyClassComponents extends Component {
    constructor(props) {
        super(props);

        this.state = {value : 0}
    }

    Increment =() => {
        this.setState({value : this.state.value + 1})
    }

    Decrement =() => {
        this.setState({value : this.state.value - 1})
    }

    render() {
        return <div>
            <h1>Class Components :</h1>
            <p>Value = <b>{this.state.value}</b></p>
            <button onClick={this.Increment}>+</button>
            <button onClick={this.Decrement}>-</button>
        </div>
        
    }
}

