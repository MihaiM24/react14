import React from "react";
import { Age } from "./Age";
import { App } from "./App";
export class Welcome extends React.Component{
    render(){
        return (
        <div>
            <p>Welcome, {this.props.name}</p>
            <Age age={this.props.age}/>
            
        </div>
        )
    }
}
Welcome.defaultProps={
    name: "Mihai"
}