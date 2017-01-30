import React from "react";
import Calculator from "./Calculator"

export default class Layout extends React.Component{
	constructor(props){
		super(props)		
	}

	render(){	
		console.log(this.props.todos)
		return(
			<div>
				<hr/>
				<h1>React Starts Here</h1>
				<ul>{this.props.todos.map((todo,key)=>{return <li key={key}>{todo.text}</li>})}</ul>
				<Calculator/>
			</div>
		);
	}
}