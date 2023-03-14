import { useState, useContext } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import NewReviewForm from "./NewReviewForm"
import ReviewCard from "./ReviewCard"
import { BookContext } from "../context/book"
import '../App.css';
import { UserContext } from "../context/user"

function Book() {

    const { state } = useLocation()
    const { book } = state

    const navigate = useNavigate()

    const { removeBook } = useContext(BookContext)
    const { addUserReview } = useContext(UserContext)

    const [newReviewFormFlag, setNewReviewForFlag] = useState(false)
    const [bookReviews, setBookReviews] = useState(book.reviews)

    function handleNewClick() {
        setNewReviewForFlag(!newReviewFormFlag)
    }

    function addNewReview(review) {
        setBookReviews([...bookReviews, review])
        addUserReview(review)
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

    function retireClick() {
        if (window.confirm('Are you sure you want to retire this book permanently?')) {
            fetch(`/books/${book.id}`, {
                method: 'DELETE'
            })
            removeBook(book)
            navigate('/books')
        }
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
            <button className="btn btn-outline-warning retire-btn" onClick={() => retireClick()}>Retire Book Permanently</button>
            <br />
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
        </div>
    )

}

export default Book