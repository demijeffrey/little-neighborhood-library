import { useState, useEffect } from "react"
import AddBookForm from "./AddBookForm"
import BookCard from "./BookCard"

function AllBooks() {

    const [books, setBooks] = useState([])
    const [newBookForm, setNewBookForm] = useState(false)

    useEffect(() => {
        fetch('/books')
        .then(res => res.json())
        .then(books => setBooks(books.sort((a, b) => (a.title > b.title) ? 1 : -1)))
    }, [])

    function addNewBook(newBook) {
        setBooks([...books, newBook])
    }

    function updateBooks(updatedBook){
        const newBookList = books.map(book => {
            if(book.id === updatedBook.id) {
                return updatedBook
            } else {
                return book
            }
        })
        setBooks(newBookList)
    }

    const displayBooks= books.map(book => {
        return <BookCard key={book.id} book={book} updateBooks={updateBooks} />
    })

    function handleClick() {
        setNewBookForm(!newBookForm)
    }

    return(
        <div>
            {newBookForm ? <AddBookForm setNewBookForm={setNewBookForm} addNewBook={addNewBook} /> : null}
            <button className="btn btn-success" onClick={handleClick}>Donate New Book</button>
            <div className="row">
                {displayBooks}
            </div>
        </div>
    )

}

export default AllBooks