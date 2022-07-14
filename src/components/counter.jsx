
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';


class Counter extends Component {
    
    state={
        count :1,
        tags: ["tag1","tag2","tag3"]
    };

    styles ={
        fontSize : 20,
        fontWeight :'bold'
    };


        
    

    render() { 

        

        return (
        <div>
            <span style={this.styles} className={ this.getBadgeClasses()}>{this.state.count}</span>
            <button className="btn btn-secondary btn-sm">Increment</button>
            <span>{this.state.tags.map(tag=><li>{tag}</li>)}</span>
        </div>);
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {count}=this.state;
        return count===0 ? "Zero" : count;
    }

}
 
export default Counter;
