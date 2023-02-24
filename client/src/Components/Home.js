import { useContext, useState } from "react"
import { UserContext } from "../context/user"
import BookCard from "./BookCard"
import UserBookCard from "./UserBookCard"

function Home() {
    
    const { user, loggedIn } = useContext(UserContext)

    // setUserBooks(user.books)

    if (!loggedIn) {
        return(
            <div>
                <h1></h1>
                <h3>Sign Up or Login</h3>
                <h5>to view the contents of your local neighborhood library!</h5>
                <img src="https://www.discovernepa.com/wp-content/uploads/2020/09/DN-HERO-LittleFreeLibrary-01-1152x648.jpg" alt="little library" />
            </div>
        )
    } else {
        return(
            <div>
                <h2>Welcome {user.username}!</h2>
                <h5 className="my-books">Books You've Reviewed:</h5>
                <div className="row">
                    {user.books.map(book => {
                        return <UserBookCard key={book.id} book={book} />
                    })}

                </div>
            </div>
        )
    }
    
}

export default Home