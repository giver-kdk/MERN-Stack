import React from 'react'
import "./styles/style.css"
import memeData from '../../utils/memeData'
import { useState } from 'react'

export default function meme()
{
	let memeArray = memeData.data.memes;
	let [memeUrl, setMemeUrl] = useState(memeArray[0].url);
	function show_meme()
	{
		let randomIndex = Math.floor(Math.random() * memeArray.length);
		let newMemeUrl = memeArray[randomIndex].url;
		console.log(newMemeUrl);
		setMemeUrl(newMemeUrl);
	}
	// show_meme();
	return (
		<div className="meme__section">
			<div className='form' action="#">
				<input type="text" className="top" placeholder='Top Meme Text'/>
				<input type="text" className="bottom" placeholder='Bottom Meme Text'/>
			</div>
			<button className="get__meme" onClick={show_meme}>Get a new meme image 🖼</button>
			<img src={memeUrl} alt="Meme Image" className="meme__pic" />
		</div>
	);
}