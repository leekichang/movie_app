import React from "react";
import PropTypes from "prop-types";

class App extends React.Component{
    state = {
       count: 0
    };

    add = () => {
        this.setState(current => ({count: current.count + 1})); //use current when u r treating with the value inside the value
    };
    minus = () => {
        this.setState(current => ({count: current.count - 1})); //use current when u r treating with the value inside the value
    };
    componentDidMount(){
        console.log("component rendered");
    }
    componentDidUpdate(){
        console.log("component updated");
    }
    componentWillUnmount(){
        console.log("Goodbye");
    }
    render (){
        console.log("Render");
        return <div>
            <h1>The number is : {this.state.count}</h1>
            <button onClick={this.add}>Add</button>
            <button onClick={this.minus}>Minus</button>
        </div>
    }
}

export default App;