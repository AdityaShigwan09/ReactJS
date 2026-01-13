import React,{Component} from "react";
import Display from "./Marks_Function";

class DisplayMarks extends Component{
    constructor(props){
        super(props);

        this.state = {
            marks:0
        };
    }

    addmarks=()=>{
        this.setState({
            marks:this.state.marks+5
        });
    }

    resetmarks=()=>{
        this.setState({
            marks:this.state.marks*0
        });
    }

    render(){
        return(
            <Display marks={this.state.marks} add={this.addmarks} reset={this.resetmarks}/>
        );
    }
}

export default DisplayMarks;