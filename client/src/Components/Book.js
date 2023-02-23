import { useState, useContext } from "react"
import { useLocation } from "react-router-dom"
import NewReviewForm from "./NewReviewForm"
import ReviewCard from "./ReviewCard"

function Book() {

    const { state } = useLocation()
    const { book } = state

    const [newReviewFormFlag, setNewReviewForFlag] = useState(false)
    const [bookReviews, setBookReviews] = useState(book.reviews)

    function handleNewClick() {
        setNewReviewForFlag(!newReviewFormFlag)
    }

    function addNewReview(review) {
        setBookReviews([...bookReviews, review])
    }

    function updateReviews(editedReview) {
        const newList = bookReviews.map(review => {
            if(review.id === editedReview.id) {
                return editedReview
            } else {
                return review
            }
        })
        setBookReviews(newList)
    }

    function deleteReview(id) {
        const filteredList = bookReviews.filter(review => review.id !== id)
        setBookReviews(filteredList)
    }

    const displayReviews = bookReviews.map(review => {
        return <ReviewCard key={review.id} review={review} updateReviews={updateReviews} deleteReview={deleteReview} />
    })

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
            <br />
            <h5>Reviews</h5>{displayReviews}
            <button className="btn btn-warning" onClick={handleNewClick}>Leave a Review</button>
            <br />
            {newReviewFormFlag ? <NewReviewForm book={book} addNewReview={addNewReview} setNewReviewForFlag={setNewReviewForFlag} /> : null}
        </div>
    )

}

export default Book