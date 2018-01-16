import React, { Component } from 'react';

export default class Sum extends Component {
    constructor() {
        super()
        this.state = {
            number1:0,
            number2:0,
            sum:null
        }
    }
    updateNumberOne(val) {
        this.setState({
            number1:val
        })
    }
    updateNumberTwo(val) {
        this.setState({
            number2:val
        })
    }
    add (num1, num2) {
        var sum = Number(num1) + Number(num2)
        this.setState({
            sum: sum
        })
    }
    render() {
        return(
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" type="number" onChange={(e) => this.updateNumberOne(e.target.value)}></input>
                <input className="inputLine" type="number" onChange={(e) => this.updateNumberTwo(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.add(this.state.number1, this.state.number2)}>Add</button>
                <span className="resultsBox">Sum: {this.state.sum}</span>
            </div>
        )
    }
}