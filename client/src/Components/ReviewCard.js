import { useState, useContext } from "react"
import { UserContext } from "../context/user"
import EditReviewForm from "./EditReviewForm"

function ReviewCard({ review, updateReviews, deleteReview }) {

    const { user, removeUserReview } = useContext(UserContext)

    const [editFormFlag, setEditFormFlag] = useState(false)

    function handleDelete() {
        fetch('/reviews', {
            method: 'DELETE',
            headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify({id: review.id})
        })
        deleteReview(review.id)
        removeUserReview(review.id)
    }

    function handleEdit(editedReview) {
        setEditFormFlag(!editFormFlag)
        updateReviews(editedReview)
    }

    if(review.user.id === user.id){
        return(
            <div className="card w-50 container">
                {editFormFlag ? <EditReviewForm review={review} handleEdit={handleEdit} /> : null}
                <div className="card">
                    <div className="card-body">
                        <p>{review.comment}</p><p>{review.rating}⭐</p>
                        <h6>-{review.user.username}</h6>
                        <button className="btn btn-outline-danger btn-sm" onClick={handleDelete}>Delete</button>
                        <button className="btn btn-outline-primary btn-sm" onClick={() => setEditFormFlag(!editFormFlag)}>Edit</button>
                    </div>
                </div>
            </div>
        )
    } else {
        return(
            <div className="card w-50 container">
                <div className="card">
                    <div className="card-body">
                        <p>{review.comment}</p><p>{review.rating}⭐</p>
                        <h6>-{review.user.username}</h6>
                    </div>
                </div>
            </div>
        )
    }

}

export default ReviewCard