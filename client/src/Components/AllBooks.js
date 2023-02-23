import { useContext } from "react"
import { BookContext } from "../context/book"
import AddBookForm from "./AddBookForm"
import BookCard from "./BookCard"
import '../App.css';

function AllBooks() {

    const { books, handleClick, addNewBook, newBookForm, setNewBookForm } = useContext(BookContext)

    const displayBooks= books.map(book => {
        return <BookCard key={book.id} book={book} />
    })

    return(
        <div>
            {newBookForm ? <AddBookForm setNewBookForm={setNewBookForm} addNewBook={addNewBook} /> : null}
            <button className="btn btn-success donate-btn" onClick={handleClick}>Donate New Book</button>
            <div className="row all-books">
                {displayBooks}
            </div>
        </div>
    )

}

export default AllBooks