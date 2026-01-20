import React, { Component } from "react";
class Text extends Component{
    constructor(props){
        super(props);

        this.state={
            txt:""
        };
    }

    Inputtxt=()=>{
        this.setState({txt:this.state.txt});
    }

    render(){
        return(
            <div>
                <h2>User Input Example</h2>
                <input 
                    type="text"
                    placeholder="Type Something..?"
                    value={this.state.txt}
                />
                <button onclick={this.Inputtxt}>Submit</button>
                <p>{this.state.txt}</p>

            </div>
        );
    }
}

export default Text;