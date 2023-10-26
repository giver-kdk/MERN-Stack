import { useState } from 'react'
import React from 'react'
import './App.css'
import user from "./assets/user.png"
import emptyStar from "./assets/star-empty.png"
import fillStar from "./assets/star-filled.png"
import Star from "./star"

function App() {
	const [contact, setContact] = useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    });
    /**
     * Challenge: Move the star image into its own component (Star)
     * - It should receive a prop called `isFilled` that it
     *   uses to determine which icon it will display
     * - Import and render that component, passing the value of
     *   `isFavorite` to the new `isFilled` prop.
     * - Don't worry about the abiliity to flip this value quite yet.
     *   Instead, you can test if it's working by manually changing
     *   `isFavorite` in state above.
     */
    
    function toggleFavorite() {
		// Here, "...prevContact" spreads the previous "contact" object
		// Then, re-assigning "isFavourite" overwrites the old "isFavourite"
		setContact(prevContact =>
			{
				return {...prevContact, isFavorite: !prevContact.isFavorite};
			});
    }
    return (
        <main className='App'>
            <article className="card">
                <img src={user} className="card--image" />
                <div className="card--info">
					{/* Here, "onClick" is not considered as event listener, but consired as a prop. So, "toggleFavourite" is not executed
					It is because "Star" is our user defined component
                   <Star isFilled={contact.isFavorite} onClick={toggleFavorite}/> */}

				   {/* We pass "handleClick" as prop that passes "toggleFavourite" function */}
					<Star isFilled={contact.isFavorite} handleClick={toggleFavorite}/>
                    <h2 className="card--name">
                        {`${contact.firstName} ${contact.lastName}`}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
                
            </article>
        </main>
    )
}

export default App
