import React, { Component } from 'react';

// const searchBar = () => {
//     return <input/>
// }

class searchBar extends Component {
    render(){
        return <input onChange={(event) => console.log(event.target.value)}/>
    }

    // onInputChange(){
    //     console.log(event.target.value);
    // }
}

export default searchBar;