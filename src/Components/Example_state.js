import React,{Component} from "react";

class Example_S extends Component{
    
    constructor(){
        super();

        this.state={
            message:true
        };
    }

    
    updatetxt=()=>{
        this.setState({
            message:!this.state.message
        });
    }

    render(){
        return(
            <div>
                <p> Example of States</p>
                <h1>Hello {this.state.message ? "React JS" :"Aditya"} !!!</h1>
                <button onClick={this.updatetxt}>Switch to {this.state.message?"Aditya":"ReactJS"}</button>
            </div>
        );
    }
}

export default Example_S;