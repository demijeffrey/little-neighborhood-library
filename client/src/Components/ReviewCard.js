import { useContext } from "react"
import { UserContext } from "../context/user"

function ReviewCard({ review }) {

    const user = useContext(UserContext)
    
    console.log(review.user)

    if(review.user_id === user.user.id){
        return(
            <div>
                <div className="card">
                    <div className="card-body">
                        <p>{review.comment}</p>
                        <li>{review.user}</li>
                        <button className="btn btn-primary">Delete</button>
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
                        <li>{review.user}</li>
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