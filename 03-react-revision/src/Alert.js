import React from 'react'

function Alert(props) {
    return (
        <div style={{ backgroundColor: "red", color:'white'}}>{props.alertMsg}</div>
    )
}

export default Alert;


// Alernatively, component in another file 
// by writing the 'export default at the front of function name


// export default function Alert(props){
//     return (
//         <div style={{backgroundColor:"green", color:"yello"}}>{props.alerMsg}</div>
//     )
// }