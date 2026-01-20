import React,{Component} from "react";

class Ex_State extends Component{
    constructor(props){
        super(props);

        //Initialize the data
        this.state={
            count:0,
            message:"Button is Not Clicked !!!"
        };


        // this.increment=this.increment.bind(this);
    }

    // increment(){
    //     //This.setState is use update the data

    //     this.setState({
    //         count:this.state.count+1,
    //         message:"Counter is Incrementing by 1"
    // });
    // }


    increment=()=>{
        this.setState({
            count:this.state.count+1,
            message:"Counter is Incrementing by 1"
        });
    };

    decrement=()=>{
        this.setState({
            count:this.state.count-1,
            message:"Counter is Decrementing by 1s"
        });
        if(this.state.count===0){
            this.setState({
                count:0,
                message:"Can't go Further!!"
            });
        }
    }
    render(){
        return(
            <div>
                <h1>State Example</h1>
                <p>Count : {this.state.count}</p>
                <p>Message :{this.state.message}</p>
                <button onClick={this.increment}>(+1)</button>
                <button onClick={this.decrement}>(-1)</button>

            </div>
        );
    }
}

export default Ex_State;


// Create a class component name anything declare marks
// initialze marks :0
//add marks inc by 5
//reset marks to 0



//Any name to Function Component
//Display marks thourgh  props
//Add and rest marks button