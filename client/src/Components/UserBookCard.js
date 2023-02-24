import '../App.css';
import { useContext, useState } from 'react';
import { UserContext } from '../context/user';
import EditReviewForm from './EditReviewForm';

function UserBookCard({ book }) {

    const user = useContext(UserContext)

    const [editFormFlag, setEditFormFlag] = useState(false)
    const [userReview, setUserReview] = useState(book.reviews.find(review => {
        if(review.user_id === user.user.id){
            return review
        }
    }))

    // console.log(book.reviews)

    function editReview() {
        setEditFormFlag(!editFormFlag)
    }

    function handleEdit(editedReview) {
        setEditFormFlag(!editFormFlag)
        setUserReview(editedReview)
    }

    // function handleDelete() {
    //     fetch('/reviews', {
    //         method: 'DELETE',
    //         headers: { 'Content-Type' : 'application/json'},
    //         body: JSON.stringify({id: userReview.id})
    //     })
    //     setUserReview({})
    // }

    return(
        <div>
            <div className="card mb-3 user-book">
                {editFormFlag ? <EditReviewForm review={userReview} handleEdit={handleEdit} /> : null}
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={book.image_url} className="img-fluid rounded-start" alt={book.title} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{book.title}</h5>
                            <h6>By: {book.author}</h6>
                            <p className='user-book-review'>My Review:</p>
                            {/* {displayReview} */}
                            <p className='card-text'>{userReview.comment}</p>
                            <h6>{userReview.rating}⭐</h6>
                        </div>
                        <button className='btn btn-outline-info' onClick={() => editReview()}>Edit Review</button>
                        {/* <button className="btn btn-outline-danger" onClick={handleDelete}>Delete</button> */}
                    </div>
                </div>
            </div>
        </div>
    )

}

export default UserBookCard

// style="max-width: 540px;"