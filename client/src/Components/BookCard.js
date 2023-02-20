import '../App.css';
// import { useNavigate } from 'react-router-dom';
import Book from './Book';

function BookCard({ book }) {

    // console.log(book)

    // const navigate = useNavigate()

    function reviewClick(book) {
        console.log(book)

        // navigate(`/book/${book.id}`, { state: { book } })
    }

    return(
        <div className="card card-style">
            <img src={book.image_url} className="card-img-top" alt={book.title} />
            <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text">{book.description}</p>
                <button href="#" className="btn btn-primary" onClick={() => reviewClick(book)}>Reviews</button>
            </div>
        </div>
    )

}

export default BookCard