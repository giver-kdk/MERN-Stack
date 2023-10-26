/*
	React Component can be used to use a bunch of HTML elements as a single function
*/

// Component is simply a function returning HTML
// Use PascalCase naming convention for function name
//  1st letter of word capital in function name for ReactJS component
// Otherwise, it won't work
function MainContent()
{
	return (
		// We use "className" instead of "class" in reactJS which is JSX syntax
		<h1 className="header">I am learning React</h1>
	);
}

// Using the react component: Simply use the function as "HTML Tag"
ReactDOM.render(<MainContent/>,	document.getElementById("root"));

ReactDOM.render(
	<div>
		<h1>Hello World</h1>
		<MainContent/>
		<h1>Bye World</h1>
	</div>,
	document.getElementById("root")
);