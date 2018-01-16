import React, { Component } from 'react';

export default class FilterObject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            unfilteredArray: [
                {
                    name: 'Steve Rogers',
                    alias: 'Captain America',
                    weapon: 'Shield' 
                },
                {
                    name: 'Bruce Wayne',
                    alias: 'Batman',
                    city: 'Gotham' 
                },
                {
                    name: 'Clark Kent',
                    cape: true,
                    canFly: true
                },
                {
                    alias: 'Wonder Woman',
                    canFly: true,
                    weapon: 'rope'
                }
            ],
            userInput: '',
            filteredArray: []
        }
    }
    handleChange(val) {
        this.setState({ userInput: val });
    }
    filterArray(prop) {   
        var unfilteredArray = this.state.unfilteredArray;
        var filteredArray = [];
        for (var i = 0; i < unfilteredArray.length; i++) {
            if (unfilteredArray[i].hasOwnProperty(prop)) {
                filteredArray.push(unfilteredArray[i]);
            }
        }
        this.setState({ filteredArray: filteredArray });
    }
    render() {
        return(
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">unfilteredArray: {JSON.stringify(this.state.unfilteredArray, null, 10)}</span>
                <input className="inputLine" onChange = { (e) => this.handleChange(e.target.value)} ></input>
                <button className="confirmationButton" onClick = { () => this.filterArray(this.state.userInput)} >Filter</button>
                <span className="resultsBox filterObjectRB">filteredArray: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}