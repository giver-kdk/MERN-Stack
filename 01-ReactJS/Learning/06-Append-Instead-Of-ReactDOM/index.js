/**
Challenge: find out what happens if we try to append JSX
to our div#root using .append() instead of ReactDOM

1. Create a sample page in JSX (≥ 4 elements) and save them in a variable
2. Select the div with the ID of "root" and use `.append()` to append
   your JSX
3. See if you can guess what will show up in the browser before running
   the code
4. See if you can explain what actually shows up in the browser
 */

// This is a JSX synatx
let list = (
	<ul>
		<li>One</li>
		<li>Two</li>
		<li>Three</li>
		<li>Four</li>
		<li>Five</li>
	</ul>
);
// Normally, JS treats JSX as normal objects. So, we'll get string representation of object as output
let root = document.getElementById("root");
root.append(list);

// This will return the detailed JS object
// root.append(JSON.stringify(list));

// ReactJS converts those JSX object into browser understandable format
// ReactDOM.render(list, root);