import React from 'react'

export default class BuffetChoice extends React.Component {
    state = {
        orders: []
    }

    calculateTotal = () => {
        let total = 0;
        for (let i of this.state.orders) {
            if (i == "beef") {
                total += 12
            } else if (i == "chicken") {
                total += 7.50
            } else if (i == "fish") {
                total += 10
            } else if (i == "mushrooms") {
                total += 5.5
            } else if (i == "spinach") {
                total += 2.5
            }
        }
        return total;
    }

    updateOrders = (e) => {
        // order does not exists in the the array
        if (this.state.orders.includes(e.target.value) === false) {
            // 1. clone the orginal 'orders' array
            let clonedOrder = [...this.state.orders]
            // 2. push the target.value into the cloned array
            clonedOrder.push(e.target.value)

            // 3. set the state variable to the new cloned arrray
            this.setState({
                'orders':clonedOrder
            }); 
        } else {
                // item is already in array
                // therefore user is unchecking it 

                // 1. clone the array (below is an alternative to using [...this.state.orders.slice()])
                let clonedOrder = this.state.orders.slice();
                
                // 2. modify the cloned array (remove the item from array)
                let index = clonedOrder.indexOf(e.target.value)
                // splice - is remvoed the item
                clonedOrder.splice(index,1);
                
                //3. set the clone back into the state
                this.setState({
                    'orders':clonedOrder
                })
            }
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <input type="checkbox" name="orders" value="beef" onChange={this.updateOrders}/><label>Beef</label>
                </div>
                <div>
                    <input type="checkbox" name="orders" value="chicken" onChange={this.updateOrders} /><label>Chicken Fillet</label>
                </div>
                <div>
                    <input type="checkbox" name="orders" value="fish" onChange={this.updateOrders}/><label>Fish Fillet</label>
                </div>
                <div>
                    <input type="checkbox" name="orders" value="mushrooms" onChange={this.updateOrders}/><label>Assorted mushhrooms</label>
                </div>
                <div>
                    <input type="checkbox" name="orders" value="spinach" onChange={this.updateOrders}/><label>Spinach</label>
                </div>
                <h1>Total: $ {this.calculateTotal()}</h1>


            </React.Fragment>

        )
    }

}