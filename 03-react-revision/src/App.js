import React from 'react'
import './styles.css';
import Alert from './Alert'

// import class-based component
import NumberBox from './NumberBox'

// create a function 
function welcome(name) {
    return (
        <h3>Welcome to your first react page {name}!</h3>
    )
}

function ImageFrame() {
    return (
        <img src={require('./kitten.jpg').default} alt="kitten" 
        style={{width:"300px",height:"300px"}}/>
    )
}

function DisplayMessage(props) {
    return <div>
        <h2>{props.message}</h2>
    </div>

}

function SumOfTwo(props) {
return <div>Sum of the two integer is: {props.n1 + props.n2}</div>
}

function App() {
    return (
        <React.Fragment>
            <h2>Hello World</h2>
            <label>Name: </label>
            <input type="text" placeholder="Your name" />
            <p style={{ color: "green" }}>Favourite Color: </p>
            <input type="radio" name="color" />Red
            <input type="radio" name="color" />Blue
            <input type="radio" name="color" />Green

            {/* Calling a function */}
            {welcome("Heydi")} 
            <ImageFrame/>
            <DisplayMessage message="you are here!"/>
            <SumOfTwo n1={3} n2={7}/>

            {/* Calling a function component from other files */}
            <Alert alertMsg="this is an alert msg"/>

            {/* Calling a class-based component */}
            <div><NumberBox initialValue={20}/></div>

        </React.Fragment>

    );
}

export default App;
