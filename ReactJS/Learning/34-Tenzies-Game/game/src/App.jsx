import { useState } from "react";
import { useEffect } from "react";
import "./App.css";

function App() {
	let [dices, setDices] = useState(initialize());
	let diceElem = [];
	let selectedNum = 1;
	function initialize()
	{
		let newDices = [];
		for(let i = 0; i < 10; i++)
		{
			let rollResult = Math.ceil(Math.random() * 6);
			newDices.push({
				value: rollResult,
				isSelected: false,
				isFixed: false
			});
		}
		return ([...newDices]);
	};
	function select_dice(id)
	{
		setDices(prevDices =>
			{
				return prevDices.map((dice, index) =>
					{
						if(id == index)
						{
							return {
								...dice,
								isSelected: !dice.isSelected
							};
						}
						else return {...dice};
					})
			})
	}
	// Populate the array as HTML element
	diceElem = dices.map((dice, index) => 
	<div 
	key={index} 
	id={index}
	className={`dice${dice.isSelected?" selected":""}`}
	onClick={() => select_dice(index)}
	>
	{dice.value}
	</div>);

	function handleRoller()
	{
		
		let reset = true;
		dices.forEach(dice =>
			{
				if(!dice.isSelected || (dice.value != selectedNum)) reset = false;
			})
		let newDices = initialize();
		if(reset)
		{
			setDices([...newDices]);
		}
		else
		{
			setDices(prevDices =>
			{
				prevDices.map((dice, index) =>
					{
						if(dice.isSelected)
						{
							newDices[index].value = dice.value;
							newDices[index].isSelected = true;
						}
					});
				return [...newDices];
			});
		}
	}
	return <div className="App">
		<div className="container">
			<div className="box">
				<h2 className="game__name">Tenzies</h2>
				<p className="game__info">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
				<div className="dices">
				{diceElem}
				{/* <div className="dice selected">1</div>
				<div className="dice">1</div>
				<div className="dice">1</div>
				<div className="dice">1</div>
				<div className="dice">1</div>

				<div className="dice">1</div>
				<div className="dice">1</div>
				<div className="dice">1</div>
				<div className="dice">1</div>
				<div className="dice">1</div> */}

				</div>
				<button className="roller" onClick={handleRoller}>Roll</button>
				<div className="suggestion">Play Game!</div>
			</div>
		</div>
	</div>;
}

export default App;
