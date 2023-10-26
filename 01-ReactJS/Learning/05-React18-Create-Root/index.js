// Creating root element using "createRoot"
let root = ReactDOM.createRoot(document.getElementById("root"));
let navbar = (
	<ul>
		<li>One</li>
		<li>Two</li>
		<li>Three</li>
	</ul>
);
// The "root" element will have a "render()" method
root.render(navbar)