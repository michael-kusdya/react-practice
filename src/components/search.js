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
            <div>
                <input value={this.state.term}
                onChange={(event) => this.setState({ term: event.target.value })}/>
            </div>
        )

    }

    // onInputChange(){
    //     console.log(event.target.value);
    // }
}

export default searchBar;