import React, { useEffect } from "react";

export default function Layout(props) {

	useEffect(() => {
		console.log("Component mounting")
	}, []);

	return (
		<div>
			<hr/>
			<h1>React TO-DO</h1>
			<ul>{props.todos.map((todo,key)=>{
				return <li key={key} onClick={ (event) => {
									props.markComplete(todo)
								}
							} className={["list-item", todo.done === true? "done-true":"done-false"].join(" ")}>{todo.text}
						</li>})
			}</ul>
			<button id="click" onClick={ () => {
					props.newItem("Alter triggered from React but Fired from AngularJS")
					}
				}>Click to make Angular Alert!!</button>
		</div>
	);
}