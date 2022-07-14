
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

    renderTags(){
        if (this.state.tags===0) return <p>there are no tags!</p>
        else
        return <span>{this.state.tags.map(tag=><li key={tag}>{tag}</li>)}</span>;
    }
        
    

    render() { 

        

        return (
        <div>
            {this.renderTags()}
            
        </div>);
    }

    /* getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {count}=this.state;
        return count===0 ? "Zero" : count;
    } */


}
 
export default Counter;
