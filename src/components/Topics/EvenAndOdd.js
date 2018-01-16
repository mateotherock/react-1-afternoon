import React, { Component } from 'react';

export default class EvenAndOdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        };
    }
    handleChange(val) {
        this.setState({ userInput: val });
    }
    evenAndOddSolve(userInput) {
        var arr = userInput.split(',');
        var evens = [];
        var odds = [];

        for (var i = 0; i<arr.length; i++) {
            if (arr[i]%2===0) {
                evens.push(parseInt(arr[i], 10));
            } else {
                odds.push(parseInt(arr[i], 10));
            }
        }
        this.setState({evenArray:evens, oddArray:odds});
    }
    render() {
        return(
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={ () => {this.evenAndOddSolve(this.state.userInput)}}>Split</button>
                <span className="resultsBox">{JSON.stringify(this.state.evenArray)}</span>
                <span className="resultsBox">{JSON.stringify(this.state.oddArray)}</span>
            </div>
        )
    }
}

