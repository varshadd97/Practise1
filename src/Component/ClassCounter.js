
import React, { Component } from "react";

class Count extends Component{
    constructor(props){
        super(props);
        this.state = {
            value : 0,
             num : 50
            }
     }
            handleIncrement = () => {
                this.setState({value: this.state.value + 1});
    }

    handleDecrement = () => {
        this.setState({num: this.state.num - 1});
}

render(){
    return(
        <>
        <h1>Class Counter </h1>
        <h2>Increment Value</h2>
        <div>Increment{this.state.value}</div>
        <button onClick={this.handleIncrement}>Click me</button>
       
        <h2>Decrement Value</h2>
        <div>Decrement{this.state.num}</div>
        <button onClick={this.handleDecrement}>Click me</button>
        </> 
    )

}
}
 export default Count;