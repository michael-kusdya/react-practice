import React from 'react';
import ReactDOM from "react-dom";

import SearchBar from './components/search'

const key = 'j_lCZ7RQoT5FINaxTQ136xpP'

const App =  () => {
    return (
        <div>
            <SearchBar />
        </div>
    )      
}

ReactDOM.render(<App/>, document.querySelector('.container'))