import { useContext } from "react"
import { UserContext } from "../context/user"

function ReviewCard({ review }) {

    const user = useContext(UserContext)
    
    console.log(review)

    function handleDelete() {
        fetch('/reviews', {
            method: 'DELETE'
        })
        // console.log(review)
    }

    if(review.user.id === user.user.id){
        return(
            <div>
                <div className="card">
                    <div className="card-body">
                        <p>{review.comment}</p>
                        <li>{review.user.username}</li>
                        <button className="btn btn-primary" onClick={() => handleDelete(review)}>Delete</button>
                        <button className="btn btn-primary">Edit</button>
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