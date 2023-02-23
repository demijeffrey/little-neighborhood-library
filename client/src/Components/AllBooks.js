import { useContext } from "react"
import { BookContext } from "../context/book"
import AddBookForm from "./AddBookForm"
import BookCard from "./BookCard"
import '../App.css';

function AllBooks() {

    const { books, handleClick, addNewBook, newBookForm, setNewBookForm } = useContext(BookContext)
    // console.log(books)

    // const [books, setBooks] = useState([])
    // const [newBookForm, setNewBookForm] = useState(false)

    // useEffect(() => {
    //     fetch('/books')
    //     .then(res => res.json())
    //     .then(books => setBooks(books.sort((a, b) => (a.title > b.title) ? 1 : -1)))
    // }, [])

    // function addNewBook(newBook) {
    //     setBooks([...books, newBook])
    // }

    // function updateBooks(updatedBook){
    //     const newBookList = books.map(book => {
    //         if(book.id === updatedBook.id) {
    //             return updatedBook
    //         } else {
    //             return book
    //         }
    //     })
    //     setBooks(newBookList)
    // }

    const displayBooks= books.map(book => {
        return <BookCard key={book.id} book={book} />
    })

    // function handleClick() {
    //     setNewBookForm(!newBookForm)
    // }

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