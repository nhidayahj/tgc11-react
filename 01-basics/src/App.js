import logo from './logo.svg';
import './App.css';
import React from 'react'
import cuteKitty from './kitten.jpg'

function saysHello(name) {
    return 'Hello there, ' + name
}

// if multiline -- put in <React.Fragment>
function multiLine() {
    return ""
}

function saysGoodbye() {
    return "Goodbye"
}

function displayHeader() {
    return (
        <h2>About Me</h2>
    )
}

function App() {
    return (
        <React.Fragment>
            <h2 id="title">Hello Friend</h2>
            <ul>
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
                <li>Option 4</li>
            </ul>
            <label style={{
                color: "magenta"
            }}>Your name: </label>
            <input type="text" placeholder="first name"></input>
            <button type="submit" >Submit</button>
            {saysHello("heydi")}
            <div>
                <img src={require('./logo.svg').default} height="500px" width="500px" />
                <img src={cuteKitty} height="300px" width="300px" />
            </div>
            <p>{saysGoodbye()}</p>
            {displayHeader()}
        </React.Fragment>
    );
}

export default App;
