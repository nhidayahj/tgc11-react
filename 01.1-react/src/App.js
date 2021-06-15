import logo from './logo.svg';
import './App.css';
import './styles.css';
// import Components from different files
import AlertBox from './AlertBox';
import MultiplyNum from './MultiplyNum';
import NumberBox from './NumberBox';
import React from 'react'

// a Functional Component (opposite is the Class Component)
// This type of function is NOT displayed in the Chrome Developer Extension
// it can accept props as an argument 
// REMEMBER: Anything in {} is a JavaScript code
function displayHeader(name) {
    return (
        <React.Fragment>
            <h2>About Myself</h2>
            <p>My name is {name}</p>
        </React.Fragment>
    )
}

function saysGoodbye() {
    return "Goodbye World"
}


// React Components -- allow Dynamic function 
// React Components can be viewed in the Chrome Extension (Components)
// Must initialized with a Capital Letter
// to pass arguments in Components, we use 'props' -- short for Properties
function DisplayMessage(props) {
    return (
        <div>{props.messageInput}</div>
    )
}

function SumOfTwo(props) {
    let sum = parseInt(props.num_one) + parseInt(props.num_two);
    return (
        <div>
            Sum of 2 numbers: {props.num_one} + {props.num_two} = {sum}
            <p>This is an extra number: {props.extra_num}</p>
        </div>
    )
}


function App() {
    return (
        <React.Fragment>
            <div>
                <h1>Hello Worldx</h1>
                <p style={{ backgroundColor: "yellow", border: '3px solid blue' }}>A blue bordered yellow paragraph</p>
                {displayHeader("Hids")}
                <h1>{saysGoodbye()}</h1>
                <DisplayMessage messageInput="This is my message" />
                <DisplayMessage messageInput="Using the same component with message -- 2nd message" />
                <h1>Sum of Two Numbers</h1>
                <SumOfTwo num_one={4} num_two={5} />
                <SumOfTwo num_one="1" num_two="3" />
                <SumOfTwo num_one="1" num_two="5" extra_num={8} />
                <AlertBox alert_msg="THIS IS AN ALERT ALERT ALERT!!!"/>
                <AlertBox text_color="yellow" alert_msg="IMPORTANT ALERT"/>
                <h1>Multiplication</h1>
                <MultiplyNum mul_one="8" mul_two="5"/>
                <MultiplyNum bg_color="black" text_color="white" mul_one={2} mul_two={6}/>
                <h1>Number Box</h1>
                <NumberBox initialValue={30}/>
            </div>
        </React.Fragment>
    );
}

export default App;
