import React from 'react'
import './App.css'

function App() {

	const [messages, setMessages] = React.useState(["a"])
    /**
     * Challenge:
     * - Only display the <h1> below if there are unread messages
     */
	let isEmpty = false;
	if(messages.length == 0) isEmpty = true;
    return (
		// In Conditional rendering, if (!isEmpty) == false, then it skips the part just after "&&"
		// If (!isEmpty) == true, then it simply renders the part after "&&"
        <div className='App'>
            { isEmpty && <h1>You're all caught up!</h1>}
            { !isEmpty && <h1>You have {messages.length} unread {messages.length > 1 ? "messages" : "message"}!</h1>}
			{/* 
				// We can directly do with ternary operator as well
				{
					messages.length === 0 ?
					<h1>You're all caught up!</h1> :
					<h1>You have {messages.length} unread messages</h1>
            	}
			*/}
        </div>
    )
}

export default App
