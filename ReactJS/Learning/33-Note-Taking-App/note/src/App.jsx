import { useState } from "react"
import "./App.css";
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
// import { data } from "./data"
import Split from "react-split"
import { nanoid } from "nanoid"
import React from "react"
import {useEffect} from "react"



export default function App() {
	/**
	 * Challenge:
	 * 1. Every time the `notes` array changes, save it
	 *    in localStorage. You'll need to use JSON.stringify()
	 *    to turn the array into a string to save in localStorage.
	 * 2. When the app first loads, initialize the notes state
	 *    with the notes saved in localStorage. You'll need to
	 *    use JSON.parse() to turn the stringified array back
	 *    into a real JS array.
	 */

	// Here, passing arrow function () => {} initializes "notes" state only once.
	// If component re-renders next time, then this initialization won't run again.
	let [notes, setNotes] = useState((() => (JSON.parse(localStorage.getItem("myNotes")) || [])));
	// const [notes, setNotes] = React.useState([]);
	const [currentNoteId, setCurrentNoteId] = useState(
		(notes[0] && notes[0].id) || ""
	);
	useEffect(() =>
	{
		let allNotes = JSON.stringify(notes);
		localStorage.setItem("myNotes", allNotes);
	}, [notes]);

	function createNewNote() {
		const newNote = {
			id: nanoid(),
			body: "# Type your markdown note's title here",
		};
		setNotes((prevNotes) => [newNote, ...prevNotes]);
		setCurrentNoteId(newNote.id);
	}

	function updateNote(text) {
		// setNotes((oldNotes) =>
		// 	oldNotes.map((oldNote) => {
		// 		let newNote = {};
		// 		if (oldNote.id === currentNoteId) {
		// 			newNote = { ...oldNote, body: text };
		// 		} else newNote = oldNote;
		// 		let note = JSON.stringify(newNote);
		// 		localStorage.setItem(`${oldNote.id}`, note);
		// 		return newNote;
		// 	})
		// );
		setNotes((oldNotes) =>
		{
			let priorityIndex = 0;
			let newNotes = oldNotes.map((oldNote, index) => {
				let newNote = {};
				if (oldNote.id === currentNoteId) {
					priorityIndex = index;
					newNote = { ...oldNote, body: text };
				} else newNote = oldNote;
				return newNote;
			});
			// Delete current element and store in a variable as array
			// Then put that array element on top of "noteElements"
			let selectedNote = newNotes.splice(priorityIndex, 1);
			newNotes.splice(0, 0, selectedNote[0]);
			return newNotes;
		});
	}

	function findCurrentNote() {
		return (
			notes.find((note) => {
				return note.id === currentNoteId;
			}) || notes[0]
		);
	}

	function deleteNote(event, noteId) {
		// "stopPropagation()" stops flow of selection to parent when child is selected
        event.stopPropagation()

		// Get the index of note to be deleted using "id" of note
		let victimIndex = 0;
		notes.forEach((note, index) =>
		{
			if(note.id == noteId) victimIndex = index;
		})
		// Delete note and update the "notes"
		let deletedNotes = notes;
		deletedNotes.splice(victimIndex, 1);
		setNotes([...deletedNotes]);
    }
	return (
		<main>
			{notes.length > 0 ? (
				<Split
					sizes={[30, 70]}
					direction="horizontal"
					className="split"
				>
					<Sidebar
						notes={notes}
						currentNote={findCurrentNote()}
						setCurrentNoteId={setCurrentNoteId}
						newNote={createNewNote}
						deleteNote = {deleteNote}
					/>
					{currentNoteId && notes.length > 0 && (
						<Editor
							currentNote={findCurrentNote()}
							updateNote={updateNote}
						/>
					)}
				</Split>
			) : (
				<div className="no-notes">
					<h1>You have no notes</h1>
					<button className="first-note" onClick={createNewNote}>
						Create one now
					</button>
				</div>
			)}
		</main>
	);
}
