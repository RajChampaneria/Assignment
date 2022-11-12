import React , {Component} from "react";

export default class ConstructorComp extends Component{
    constructor(){
        super()
        this.state = {
            name:"raj",
            add:"valsad",
           name:"anand"
        }
        
    }

    render() {
        return (
            <div>
                <h1>Name:{this.state.name}</h1>
                <h1><b>Your Name is {this.state.name} And You live in {this.state.add}</b> </h1>

                
                
            </div>
        )
    }
}