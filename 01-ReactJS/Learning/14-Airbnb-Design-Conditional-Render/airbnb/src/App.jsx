import "./App.css";
import Nav from "./components/navbar";
import Hero from "./components/hero";
import Card from "./components/card";
import data from "./utils/data";

function App() {
	let cards = data.map((elem) => {
		return (
			<Card
				// Create key just to make the item unique. The `id` is provided by database
				key={elem.id}
				// title= {elem.title}
				// price= {elem.price}
				// coverImg= {elem.coverImg}
				// rating={elem.stats.rating}
				// reviewCount={elem.stats.reviewCount}
				// location={elem.location}
				// openSpots={elem.openSpots}

				// Instead of long code above, directly assign the object
				item={elem}
			/>
		);
	});
	return (
		<div className="App">
			<Nav />
			<Hero />
			<div className="box">{cards}</div>
		</div>
	);
}

export default App;
