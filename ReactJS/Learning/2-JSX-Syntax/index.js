// JSX(JavaScript XML) is a syntax for using HTML inside JavaScript(ReactJS)
// Using single parent element is allowed normally
ReactDOM.render(<h1>I am a header</h1>, document.getElementById("root"));



// To use multiple elements, an extra parent element(div) is required
ReactDOM.render(
<div>
	<p>I am child one</p>
	<p>I am child two</p>
</div>,
document.getElementById("box")
);
	
	
	
// Storing a single HTML element into a variable
let element = <p className="para">I am a paragraph</p>;
ReactDOM.render(element, document.getElementById("container"));
//**********	  Shows the HTML element as JS object		**********
console.log(element);



// Storing mutiple HTML elements into a variable requires ()
let elements = (
	<div>
		<p>I am child one from variable</p>
		<p>I am child two from variable</p>
	</div>
);
ReactDOM.render(elements, document.getElementById("block"));



// Challenge: 

// Create a navbar in JSX:
//     - Use the semantic `nav` element as the parent wrapper
//     - Have an h1 element with the brand name of your "website"
//     - Insert an unordered list for the other nav elements
//     - Inside the `ul`, have three `li`s for "Pricing",
//       "About", and "Contact"
//     - Don't worry about styling yet - it'll just be plain-looking HTML for now

let navbar = (
	<nav>
		<h2>C-Maint</h2>
		<ul>
			<li>Pricing</li>
			<li>About</li>
			<li>Contact</li>
		</ul>
	</nav>
);
ReactDOM.render(navbar, document.getElementById("navbar"));




