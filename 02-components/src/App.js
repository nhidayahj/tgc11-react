import logo from './logo.svg';
import React from 'react';
import Header from './Header.js'

function Alert(props) {
    return <div style={{
        backgroundColor: props.bgColor,
        border: "2px dotted black",
        fontSize: "30px",
        height: "40px",
        color: "white"
    }}>{props.message}</div>
}


function App() {
    return (
        <div className="App">
            <Header />
            <Alert 
            message="Danger" 
            bgColor="blue"/>
        </div>
    );
}

export default App;
