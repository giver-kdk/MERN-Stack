/**
Challenge: Project setup

- Create a `components` folder
- Create the following components in separate files inside
  the components folder.  In each one, just render an `h1` 
  with the name of the component (e.g. return <h1>Navbar goes here</h1>):
    - Navbar
    - Main
- Create an App component outside the components folder (sibling to
  the index.js file)
    - Have App render the Navbar and Main components
- Import and render the App component inside of index.js using ReactDOM
    - At this point you should have your "Navbar goes here" etc. showing up
      in the mini-browser.
- Go to Google fonts and get the "Inter" font with weights 400, 600, and 700.
  Put the links to those fonts ABOVE the style.css link in index.html (Use
  the `<link/>` elements instead of the @import or npm options for getting
  the fonts. You may need to do some extra research to figure out how this 
  works if you haven't done it before)
*/
import "./App.css";
import Navbar from "./components/navbar";
import Body from "./components/body";
import {useState} from "react"

function App() {
	let [lightMode, setLightMode] = useState(false);
	let modeStyle = lightMode ? " light" : "";
	function toggle_mode()
	{
		setLightMode(prevLightMode => !prevLightMode);
	}
	return (
		<div className={`App${modeStyle}`}>
			<Navbar mode={modeStyle} handleClick={toggle_mode}/>
			<Body mode={modeStyle}/>
		</div>
	);
}

export default App;
