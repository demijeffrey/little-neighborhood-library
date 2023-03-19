import React, { useState, useEffect } from "react";

const BookContext = React.createContext('book')

function BookProvider({ children }) {

    const [books, setBooks] = useState([])
    const [newBookForm, setNewBookForm] = useState(false)
    const [book, setBook] = useState(null)

    useEffect(() => {
        fetch('/books')
        .then(res => res.json())
        .then(books => setBooks(books.sort((a, b) => (a.title > b.title) ? 1 : -1)))
    }, [book])
    // console.log(books)

    const handleClick = () => {
        setNewBookForm(!newBookForm)
    }

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

    function removeBook(book) {
        const newBookList = books.filter(b => book.id !== b.id)
        setBooks(newBookList)
    }

    return(
        <BookContext.Provider value={{books, handleClick, addNewBook, newBookForm, setNewBookForm, updateBooks, removeBook, setBooks, setBook}}>
            {children}
        </BookContext.Provider>
    )

}

export { BookContext, BookProvider }