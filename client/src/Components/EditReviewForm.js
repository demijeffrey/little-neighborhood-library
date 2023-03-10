import { useState } from "react"

function EditReviewForm({ review, handleEdit }) {

    const [editedComment, setEditedComment] = useState(review.comment)
    const [editedRating, setEditedRating] = useState(null)
    const [errors, setErrors] = useState([])

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
            if (!editedReview.errors){
                handleEdit(editedReview)
            } else {
                const errorList = editedReview.errors.map(error => <li>{error}</li>)
                setErrors(errorList)
            }
        })
    }

    return(
        <div>
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
                <button className="btn btn-info btn-sm" type="submit">Save</button>
            </form>
            {errors}
        </div>
    )

}

export default EditReviewForm