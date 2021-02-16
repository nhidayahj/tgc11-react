import './App.css';
import NumberBox from './NumberBox'
import React from 'react'

function App() {
    return (
        <React.Fragment>
            <span>
                <NumberBox count={10} color="magenta"/>
            </span>
        </React.Fragment>
    );
}

export default App;
