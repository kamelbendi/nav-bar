import React, { Component } from 'react';
import Counter from "./counter.jsx";
class Counters extends Component {
    state = { 
        counters: [
            {id:1,value:10},
            {id:2,value:5},
            {id:3,value:0},
            {id:4,value:0}
        ]
     } 
handleDelete = (counterId) =>{
    console.log("delete button clicked")
    const counters = this.state.counters.filter(counter => counter.id !== counterId);
    this.setState({counters});
    
}

    render() { 
        return (

        <div>
            {this.state.counters.map( counter => 
                (<Counter onDelete={this.handleDelete} key={counter.id} value={counter.value}/>))}
        
        </div>);

    }
}
 
export default Counters;