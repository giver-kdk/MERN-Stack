import { useState } from "react";
import "./App.css";

function App() {
	let [dices, setDices] = useState(initialize());
	let [suggest, setSuggest] = useState("Play Game");
	let [btnContent, setBtnContent] = useState("Roll");
	let [selectedNum, setSelectedNum] = useState(-1);
	let diceElem = [];
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
				let isfinished = true;
				let newDices = prevDices.map((dice, index) =>
					{
						if(id == index && !dice.isFixed)
						{
							return {
								...dice,
								isSelected: !dice.isSelected
							};
						}
						else return {...dice};
					})
				for(let i = 0; i < newDices.length - 1; i++)
				{
					if((newDices[i].value != newDices[i + 1].value))2
					{
						isfinished = false;
					}
				}
				if(newDices.filter(dice => dice.isSelected).length != 10)
				{
					isfinished = false;
				}
				if(isfinished)
				{
					setBtnContent("Reset");
					setSuggest("Congratulations! You Completed the game");
				}
				return newDices;
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
		let isValid = true;
		let selectedDices = dices.filter(dice => dice.isSelected);
		for(let i = 0; i < selectedDices.length - 1; i++)
		{
			if(selectedDices[i].value != selectedDices[i + 1].value) isValid = false;
		}
		if(isValid)
		{
			setDices(prevDices =>
				{
					return prevDices.map(dice =>
						{
							if(dice.isSelected)
							{
								return {
									...dice,
									isFixed: true
								};
							}
							else return {...dice};
						});
				});
			let reset = true;
			dices.forEach(dice =>
				{
					if(!dice.isSelected || (dice.value != selectedNum)) reset = false;
				})
			let newDices = initialize();
			if(reset)
			{
				setDices([...newDices]);
				setBtnContent("Roll");
				setSuggest("Play Game");
				setSelectedNum(-1);
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
								newDices[index].isFixed = true;
							}
						});
					return [...newDices];
				});
			}
			
			if(selectedNum == -1)
			{
				let selection = dices.filter(dice => dice.isSelected)[0].value;
				setSelectedNum(selection);
				setSuggest(`You selected ${selection}. Select more of these`);
			}
		}
		else
		{
			setSuggest("Selected Dices should be same");
		}
		
	}
	return <div className="App">
		<div className="container">
			<div className="box">
				<h2 className="game__name">Tenzies</h2>
				<p className="game__info">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
				<div className="dices">
				{diceElem}
				</div>
				<button className="roller" onClick={handleRoller}>{btnContent}</button>
				<div className="suggestion">{suggest}</div>
			</div>
		</div>
	</div>;
}

export default App;
