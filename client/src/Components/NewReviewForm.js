import { useState, useContext } from "react"
import { UserContext } from "../context/user"

function NewReviewForm({ book, setNewReviewForFlag, addNewReview, setBookReviews }) {

    const { user } = useContext(UserContext)

    // console.log(book)

    const [comment, setComment] = useState('')
    const [rating, setRating] = useState(null)

    function onSubmit(e) {
        e.preventDefault()
        fetch('/reviews', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
                comment: comment,
                rating: rating,
                user_id: user.id,
                book_id: book.id
            })
        })
        .then(res => res.json())
        .then(review => {
            setNewReviewForFlag(false)
            // setBookReviews(review)
            console.log(review)
        })
    }

    return(
        <form className="container" onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
                <label className="form-label">Comment</label>
                <textarea type="text" className="form-control" value={comment} onChange={(e) => setComment(e.target.value)} />
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="exampleRadios" value="1" onChange={(e) => setRating(e.target.value)} />
                <label className="form-check-label">1</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="exampleRadios" value="2" onChange={(e) => setRating(e.target.value)} />
                <label className="form-check-label">2</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="exampleRadios" value="3" onChange={(e) => setRating(e.target.value)} />
                <label className="form-check-label">3</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="exampleRadios" value="4" onChange={(e) => setRating(e.target.value)} />
                <label className="form-check-label">4</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="exampleRadios" value="5" onChange={(e) => setRating(e.target.value)} />
                <label className="form-check-label">5</label>
            </div>
            <button type="submit">Submit</button>
        </form>
    )

}

export default NewReviewForm