import React, { Component } from "react";
import {connect} from 'react-redux';

class Counter extends Component {
    // state = { count: 0 }
    increment = () => {
        // this.setState({ count: this.state.count + 1 })
        this.props.dispatch({type:'INCREMENT'})
    }
    decrement = () => {
        this.props.dispatch({type:'DECREMENT'})
        // this.setState({ count: this.state.count - 1 })
    }
    reset=()=>{
        this.props.dispatch({type:'RESET'})
    }
    render() {
        return (
            <div>
                <button onClick={this.increment}>+</button>
                <span>{this.props.count}</span>
                <button onClick={this.decrement} disabled={this.props.count < 1}>-</button>
                <div>
                <button onClick={this.reset}>Reset</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        count:state.count
    }
}

export default connect(mapStateToProps)(Counter);