import { useState, useEffect } from "react"
import AddBookForm from "./AddBookForm"
import BookCard from "./BookCard"

function AllBooks() {

    const [books, setBooks] = useState([])
    const [newBookForm, setNewBookForm] = useState(false)

    useEffect(() => {
        fetch('/books')
        .then(res => res.json())
        .then(books => setBooks(books))
    }, [])

    function addNewBook(newBook) {
        setBooks([...books, newBook])
    }

    const displayBooks= books.map(book => {
        return <BookCard key={book.id} book={book} />
    })

    function handleClick() {
        setNewBookForm(!newBookForm)
    }

    return(
        <div>
            {newBookForm ? <AddBookForm setNewBookForm={setNewBookForm} addNewBook={addNewBook} /> : null}
            <button onClick={handleClick}>Donate New Book</button>
            <div className="row">
                {displayBooks}
            </div>
        </div>
    )

}

export default AllBooks