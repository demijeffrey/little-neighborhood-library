import { useState } from "react"

function EditReviewForm({ review, handleEdit }) {

    const [editedComment, setEditedComment] = useState(review.comment)
    const [editedRating, setEditedRating] = useState(null)

    function handleSubmit(e) {
        e.preventDefault()
        fetch('/reviews', {
            method: 'PATCH',
            headers: { 'Content-Type' : 'application/json' },
            body: JSON.stringify({
                comment: editedComment,
                rating: editedRating,
                id: review.id
            })
        })
        .then(res => res.json())
        .then(editedReview => {
            handleEdit(editedReview)
        })
    }

    return(
        <form className="container card w-50" onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-3">
                <label className="form-label">Comment</label>
                <textarea type="text" className="form-control" value={editedComment} onChange={(e) => setEditedComment(e.target.value)} />
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="ratingRadios" value="1" onChange={(e) => setEditedRating(e.target.value)} />
                <label className="form-check-label">1</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="ratingRadios" value="2" onChange={(e) => setEditedRating(e.target.value)} />
                <label className="form-check-label">2</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="ratingRadios" value="3" onChange={(e) => setEditedRating(e.target.value)} />
                <label className="form-check-label">3</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="ratingRadios" value="4" onChange={(e) => setEditedRating(e.target.value)} />
                <label className="form-check-label">4</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="ratingRadios" value="5" onChange={(e) => setEditedRating(e.target.value)} />
                <label className="form-check-label">5</label>
            </div>
            <button type="submit">Submit</button>
        </form>
    )

}

export default EditReviewForm