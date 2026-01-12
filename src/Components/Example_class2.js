import React, { Component } from "react";

class Welcome extends Component{
    render(){
        return(
            <div>
                <h1>Class Component</h1>
                <p>This is the Example of Class Component</p>
                <p>Use Of Props In Class Component {this.props.name}</p>
            </div>
        );
    }
}

export default Welcome;