import logo from './logo.svg';
import bgImage from './jap.jpeg'
import React from 'react'
import './App.css';


function App() {
  return (
    <React.Fragment>
        <div style={{
            backgroundColor:"gray",
            height:"30px",
            padding:"10px"
        }}>
            <span style={{
                padding: "0 20px"
            }}>Home</span>
            <span style={{padding: "0 20px"}}>About Us</span>
            <span style={{padding: "0 20px"}} >Our Menu</span>
            <span style={{padding: "0 20px"}}>Contact Us</span>
        </div>
    </React.Fragment>

  );
}

export default App;
