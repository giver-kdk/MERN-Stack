// ReactDOM.render(<h1>Hello, React!</h1>, document.getElementById("root"))

/* 
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element
- Give it some textContent
- Give it a class name of "header"
- append it as a child of the div#root
    
*/

// Imperative way of coding in Vanilla JS
let root = document.getElementById("root");
let child = document.getElementById("header");
root.appendChild(child);

// Declarative way of coding in ReactJS
ReactDOM.render(<h1>I am inside a container</h1>, document.getElementById("container"));