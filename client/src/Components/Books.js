import { useState, useEffect } from "react"
import AddBookForm from "./AddBookForm"
import BookCard from "./BookCard"

function Books() {

    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('/books')
        .then(res => res.json())
        .then(books => setBooks(books))
    }, [])

    const displayBooks= books.map(book => {
        return <BookCard key={book.id} book={book} />
    })

    return(
        <div>
            <AddBookForm />
            {displayBooks}
        </div>
    )

}

export default Books