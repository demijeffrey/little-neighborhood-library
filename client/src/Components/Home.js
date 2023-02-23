import { useContext, useState } from "react"
import { UserContext } from "../context/user"
import BookCard from "./BookCard"

function Home() {
    
    const { user, loggedIn } = useContext(UserContext)

    // const [userBooks, setUserBooks] = useState(user.books ? [] : user.books)

    // console.log(user.books)
    // if (user.books !== []) {
    //     setUserBooks(user.books)
    // } else {
    //     setUserBooks(null)
    // }

    console.log(user.books)


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
                <h5 className="my-books">Your Reviewed Books:</h5>
                <div className="row">
                    {user.books.map(book => {
                        return <BookCard key={book.id} book={book} />
                    })}

                </div>
            </div>
        )
    }
    
}

export default Home