import React from 'react'
import "./styles/style.css"
import { useState } from 'react'
import { useEffect } from 'react'

export default function meme()
{
	let [memeArray, setMemeArray] = useState([]);
	let [meme, setMeme] = useState({
		topValue: "Top Meme Text",
		bottomValue: "Bottom Meme Text",
		memeUrl: "http://i.imgflip.com/1bij.jpg"
	});
	useEffect(() =>
	{
		// Here, we can create a separate "async function" to use "async-await"
		fetch("https://api.imgflip.com/get_memes")
		.then(result => result.json())
		.then(value => setMemeArray (value.data.memes));
	}, [])
	function show_meme()
	{
		let randomIndex = Math.floor(Math.random() * memeArray.length);
		let newMemeUrl = memeArray[randomIndex].url;
		console.log(newMemeUrl);
		setMeme({...meme, memeUrl: newMemeUrl});
	}
	// show_meme();
	function fill_text(e)
	{
		let name = e.target.name;
		let value = e.target.value;
		setMeme(prevMeme =>
			{
				return {
					...prevMeme,
					[name]: value
				}
			})
	}
	return (
		<div className="meme__section">
			<div className='form' action="#">
				<input 
				type="text" 
				className="top" 
				placeholder='Top Meme Text' 
				onChange={fill_text}
				name="topValue"
				/>
				<input 
				type="text" 
				className="bottom" 
				placeholder='Bottom Meme Text' 
				onChange={fill_text}
				name="bottomValue"
				/>
			</div>
			<button className="get__meme" onClick={show_meme}>Get a new meme image 🖼</button>
			<div className="meme__visual">
				<div className="topText">{meme.topValue}</div>
				<div className="bottomText">{meme.bottomValue}</div>
				<img src={meme.memeUrl} alt="Meme Image" className="meme__pic" />
			</div>
		</div>
	);
}