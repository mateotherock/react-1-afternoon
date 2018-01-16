import React, { Component } from 'react';

export default class FilterString extends Component {
    constructor() {
        super();
        this.state = {
            unfilteredArray : ["Jeremy","Julie","Melody","Matthew","Mary","Jessica","Suzanne","Laurie","Melisandre","Margo","Michael","John"],
            userInput : '',
            filteredArray : []
        }
    }
handleChange(val) {
    this.setState({userInput: val});
}
filterArray(prop) {
    var unfilteredArray = this.state.unfilteredArray;
    var filteredArray = [];
    for (var i = 0; i < unfilteredArray.length; i++) {
        if (unfilteredArray[i].includes(prop)) {
            filteredArray.push(unfilteredArray[i]);
        }
    }
    this.setState({ filteredArray: filteredArray });
}
    render() {
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">unfilteredArray: {JSON.stringify(this.state.unfilteredArray, null, 10)}</span>
                <input className="inputLine" onChange = {(e) => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick = {() => this.filterArray(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterStringRB">filteredArray: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}