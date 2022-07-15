
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';


class Counter extends Component {
    
    state={
        value : this.props.value
        
    };

    styles ={
        fontSize : 20,
        fontWeight :'bold'
    };

        
    handleIncrement = () =>
    {
        this.setState( {value : this.state.value + 1} );
    }

    handleDecrease = () =>
    {
        this.setState({value : this.state.value-1})
    }
    render() { 
    
        return (
        <div>
            <span className={this.getBadgeClasses()}>{this.state.value}</span>
            <button onClick={this.handleIncrement} className='btn btn-secondary btn-sm'>Increment</button>
            <button onClick={this.handleDecrease} className='btn btn-secondary btn-sm'>Decrease</button>
            <button className="btn btn-danger btn-sm m-2" onClick={ () => this.props.onDelete(this.props.id)} >Delete</button>
        </div>);
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }

/*
    formatCount(){
        const {count}=this.state;
        return count===0 ? "Zero" : count;
    } */


}
 
export default Counter;
