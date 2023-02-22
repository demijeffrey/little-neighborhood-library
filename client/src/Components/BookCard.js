import '../App.css';
import { useNavigate } from 'react-router-dom';

function BookCard({ book, updateBooks }) {

    const navigate = useNavigate()

    function moreInfoClick(book) {
        // console.log(book)

        navigate(`/book/${book.title}`, { state: { book } })
    }

    function returnBook() {
        fetch('/books', {
            method: 'PATCH',
            headers: { 'Content-Type' : 'application/json' },
            body: JSON.stringify({
                id: book.id,
                available: !book.available
            })
        })
        .then(res => res.json())
        .then(updatedBook => {
            updateBooks(updatedBook)
        })
    }

    return(
        <div className="card card-style">
            <img src={book.image_url} className="card-img-top" alt={book.title} />
            <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <h6>By: {book.author}</h6>
                <p>{book.genre}</p>
                {book.available ? <p>Available</p> : <p>Not Available</p>}
                {/* <p className="card-text">{book.description}</p> */}
                <button href="#" className="btn btn-secondary" onClick={() => moreInfoClick(book)}>More Info</button>
                <br />
                {book.available ? <button className="btn btn-outline-success btn-sm" onClick={() => returnBook()}>Borrow</button> : <button className="btn btn-outline-danger btn-sm" onClick={() => returnBook()}>Return</button>}
            </div>
        </div>
    )

}

export default BookCard