import React from 'react'
import "./styles/style.css"
import memeData from '../../utils/memeData'
import { useState } from 'react'

export default function meme()
{
	let memeArray = memeData.data.memes;
	let [meme, setMeme] = useState({
		topValue: "",
		botttomValue: "",
		memeUrl: memeArray[0].url
	});
	function show_meme()
	{
		let randomIndex = Math.floor(Math.random() * memeArray.length);
		let newMemeUrl = memeArray[randomIndex].url;
		console.log(newMemeUrl);
		setMeme({...meme, memeUrl: newMemeUrl});
	}
	// show_meme();
	function fill_top()
	{
		// let input = document.querySelector("top");
		// setTopValue();
		// console.log(input.value);
	}
	function fill_bottom()
	{

	}
	return (
		<div className="meme__section">
			<div className='form' action="#">
				<input type="text" className="top" placeholder='Top Meme Text' onChange={fill_top}/>
				<input type="text" className="bottom" placeholder='Bottom Meme Text' onChange={fill_bottom}/>
			</div>
			<button className="get__meme" onClick={show_meme}>Get a new meme image 🖼</button>
			<div className="topText">{meme.topValue}</div>
			<div className="bottomText">{meme.bottomValue}</div>
			<img src={meme.memeUrl} alt="Meme Image" className="meme__pic" />
		</div>
	);
}