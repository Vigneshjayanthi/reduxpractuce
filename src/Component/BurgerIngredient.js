import React, { Component } from "react"
import { connect } from 'react-redux';
import keyvalue from '../ActionType'

class BurgerIngredinets extends Component {
    Increment = (event) => {
      //  console.log(event.target.value)
        this.props.dispatch({ type: event.target.value })
    }
    Decrement = (event) => {
        this.props.dispatch({ type: event.target.value})
    }

    render() {
        return (<div>
            <div>
                <label>SALED</label>: &nbsp; &nbsp;
                <button  value ={keyvalue.saledadded} onClick={(event)=>{this.Increment(event)}}>+</button>
                <span>{this.props.salad}</span>
                <button value ={keyvalue.saledremove} onClick={(event)=>{this.Decrement(event)}} disabled={this.props.salad < 1} >-</button>
            </div>
            <div>
                <label>MEAT</label>: &nbsp; &nbsp;
                <button  value ={keyvalue.meatadded} onClick={(event)=>{this.Increment(event)}}>+</button>
                <span>{this.props.meat}</span>
                <button value ={keyvalue.meatremove} onClick={(event)=>{this.Decrement(event)}} disabled={this.props.meat< 1} >-</button>
            </div>
            <div>
                <label>BACON</label>: &nbsp;
                <button  value ={keyvalue.baconadded} onClick={(event)=>{this.Increment(event)}}>+</button>
                <span>{this.props.bacon}</span>
                <button value ={keyvalue.baconremove} onClick={(event)=>{this.Decrement(event)}} disabled={this.props.bacon< 1} >-</button>
            </div>
            <div>
                <label>CHEESE</label>:&nbsp;
                <button  value ={keyvalue.cheeseadded} onClick={(event)=>{this.Increment(event)}}>+</button>
                <span>{this.props.cheese}</span>
                <button value ={keyvalue.cheeseremove} onClick={(event)=>{this.Decrement(event)}} disabled={this.props.cheese< 1} >-</button>
            </div>
            <button  value ={keyvalue.reset} onClick={(event)=>{this.Increment(event)}}>RESET</button>
        </div >
        )
    }
}

function mapStateToProps(state) {
    return {
        salad: state.salad,
        meat: state.meat,
        cheese:state.cheese,
        bacon:state.bacon
    }
}
export default connect(mapStateToProps)(BurgerIngredinets);
