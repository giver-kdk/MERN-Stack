/**
	Mini Challenge:
	Move the `header`, middle element and footer element from Page into 
	its own component called "Header", "Body" and "Footer"
*/
// Component is what we generally use in ReactJS

function Header()
{
	return (
		// Inline-Styling in ReactJS. Use {{}} to write styles
		<header style={{color: "blue", backgroundColor: "skyblue"}}>
			<nav className="navbar">
				<img className="logo" src="react_logo.png"></img>
				<ul className="nav__items">
					<li>Pricing</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
			</nav>
		</header>
	);
}
function Body()
{
	return (
		<div>
			<h1>Reasons I'm excited to learn ReactJS</h1>
			<ol>
				<li>I want to create a web app</li>
				<li>I want to solve problems</li>
				<li>I want to build a business</li>
			</ol>
		</div>
	);
}
function Footer()
{
	return (
		<footer>
			<small>© 20xx Khadka development. All rights reserved.</small>
		</footer>
	);
}
// Here, "Page" is the parent component and "Header", "Body" & "Footer" are child components
function Page()
{
	return (
		<div>
			{/* Using the instance of components */}
			<Header/>
			<Body/>
			<Footer/>
		</div>
	);
}
ReactDOM.render(<Page/>, document.getElementById("root"));
