import React, { Component } from 'react';

export default class Palindrome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput : '',
            palindrome : '',
        }
    }
    handleChange(val) {
        this.setState({
            userInput: val
        })
    }
    isPalindrome(input) {
        var forwardArray = input
        var backwardArray = input
        backwardArray = backwardArray.split('').reverse().join('')
        console.log(forwardArray)
        console.log(backwardArray)
        if (forwardArray === backwardArray) {
            this.setState({palindrome:'true'})
        } else {
            this.setState({palindrome:'false'})
        }
    }
    render() {
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.isPalindrome(this.state.userInput)}>isPalindrome</button>
                <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
            </div>
        )
    }
}