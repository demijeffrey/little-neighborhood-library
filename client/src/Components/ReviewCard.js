import { useState, useContext } from "react"
import { UserContext } from "../context/user"
import EditReviewForm from "./EditReviewForm"

function ReviewCard({ review }) {

    const user = useContext(UserContext)

    const [editFormFlag, setEditFormFlag] = useState(false)
    
    // console.log(review)

    function handleDelete() {
        fetch('/reviews', {
            method: 'DELETE'
        })
    }

    function handleEdit() {
        setEditFormFlag(!editFormFlag)
    }

    if(review.user.id === user.user.id){
        return(
            <div>
                {editFormFlag ? <EditReviewForm review={review} /> : null}
                <div className="card">
                    <div className="card-body">
                        <p>{review.comment}</p>
                        <li>{review.user.username}</li>
                        <button className="btn btn-primary" onClick={handleDelete}>Delete</button>
                        <button className="btn btn-primary" onClick={handleEdit}>Edit</button>
                    </div>
                </div>
            </div>
        )
    } else {
        return(
            <div>
                <div className="card">
                    <div className="card-body">
                        <p>{review.comment}</p>
                        <li>{review.user.username}</li>
                    </div>
                </div>
            </div>
        )
    }

    // return(
    //     <div>
    //         <div className="card">
    //             <div className="card-body">
    //                 <p>{review.comment}</p>
    //                 <li>{review.user}</li>
    //                 <button className="btn btn-primary">Delete</button>
    //             </div>
    //         </div>
    //     </div>
    // )

}

export default ReviewCard