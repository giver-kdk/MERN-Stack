/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

*/
/**
Challenge: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
	"© 20xx <last name here> development. All rights reserved."
 */
// Component is what we generally use in ReactJS
function Page()
{
	return (
		<div>
			<header>
				<nav>
					<img src="react_logo.png" height="50"></img>
				</nav>
			</header>
				<h1>Reasons I'm excited to learn ReactJS</h1>
				<ol>
					<li>I want to create a web app</li>
					<li>I want to solve problems</li>
					<li>I want to build a business</li>
				</ol>
			<footer>
				<small>
					© 20xx Khadka development. All rights reserved.
				</small>
			</footer>
		</div>
	);
}
ReactDOM.render(<Page/>, document.getElementById("root"));
