import React, { Component } from 'react';

// const searchBar = () => {
//     return <input/>
// }

class searchBar extends Component {
    constructor(props){
        super(props);

        this.state = { term: 'Waaa'};
    }
    render(){
        return(
            <div className="search-bar">
                <input value={this.state.term}
                onChange={(event) => this.onInputChange(event.target.value)}/>
            </div>
        )

    }

    onInputChange(term){
        this.setState(this.state.term);
        this.props.onSearchTermChange(term)
    }
}

export default searchBar;