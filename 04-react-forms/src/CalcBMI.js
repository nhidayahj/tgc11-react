import React from 'react'


export default class CalcBMI extends React.Component {
    state = {
        weight: 0,
        height:0
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    <label>Enter weight: </label>
                    <input type="text" value={this.state.weight}/>
                </div>
                <div>
                    <label>Enter height: </label>
                    <input type="text" value={this.state.height}/>
                </div>
                


            </React.Fragment>
        )
    }

}







// export default class CalcBMI extends React.Component {
//     // state is usually what the user has to input 
//     state = {
//         weight: 0,
//         height: 0,
//     }
//     render() {
//         return (
//             <React.Fragment>
//                 <div>
//                     {/* check with browser 'Component'  inspeter*/}
//                     <label>Weight:</label>
//                     <input type="text" value={this.state.weight} onChange={this.updateWeight} />
//                     <label>Height:</label>
//                     <input type="text" value={this.state.height} onChange={(e) => {
//                         this.setState({
//                             'height': e.target.value
//                         })
//                     }} />
//                 </div>
                
//                 <div>
//                     Your BMI is: {this.calculateBMI()}
//                     <p>Your are {this.showStatus()}</p>
//                 </div>
//             </React.Fragment>
//         )
//     }
//     updateWeight = (e) => {
//         this.setState({
//             'weight': e.target.value
//         })
//     }

//     calculateBMI() {
//         return parseInt(this.state.weight) / parseInt(this.state.height) * parseInt(this.state.height) 
//     }

//     showStatus(){
//         let bmi = this.calculateBMI();
//         if (bmi < 18.5) {
//             return 'Underweight'
//         } else if (bmi < 25) {
//             return <h3>Healthy</h3>
//         }
//     }
// }