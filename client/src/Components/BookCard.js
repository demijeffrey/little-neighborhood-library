import '../App.css';

function BookCard({ book }) {

    console.log(book)

    return(
        <div className="card card-style">
            <img src={book.image_url} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text">{book.description}</p>
                <a href="#" className="btn btn-primary">Reviews</a>
            </div>
        </div>
    )

}

export default BookCard