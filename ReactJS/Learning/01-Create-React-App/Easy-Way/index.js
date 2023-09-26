/*
	ReactDOM is a global library used to render a HTML element on specified destination(DOM Node)
	It somewhat works liek overwriting HTML child inside a HTML parent element
	Syntax: 
		ReactDOM(element, destination);
*/

ReactDOM.render(<h1>Hello World</h1>, document.getElementById("root"));
// The last render overwrites the previous renders in same destination
ReactDOM.render(
	<ul>
		<li>Nepal</li>
		<li>India</li>
		<li>China</li>
	</ul>,
	document.getElementById("container")
);