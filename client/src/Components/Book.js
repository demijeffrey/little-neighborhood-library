import { useState } from "react"
import { useLocation } from "react-router-dom"

function Book() {

    const { state } = useLocation()
    const { book } = state

    const [newReviewFormFlag, setNewReviewForFlag] = useState(false)

    // console.log(book)

    function handleNewClick() {
        setNewReviewForFlag(!newReviewFormFlag)
        console.log('clicked')
    }

    return(
        <div>
            <h2>{book.title}</h2>
            <img src={book.image_url} />
            <br />
            <h5>Author:</h5><p>{book.author}</p>
            <br />
            <h5>Genre:</h5><p>{book.genre}</p>
            <br />
            <h5>Summary:</h5><p>{book.description}</p>
            <button onClick={handleNewClick}>Leave a Review</button>
        </div>
    )

}

export default Book