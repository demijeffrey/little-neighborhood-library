import React, { useState, useEffect } from "react"

const UserContext = React.createContext()

function UserProvider({ children }) {

    const [user, setUser] = useState({})
    const [loggedIn, setLoggedIn] = useState(false)
    const [userBooks, setUserBooks] = useState([])

    useEffect(() => {
        fetch('/current-user')
        .then(res => res.json())
        .then(currentUser => {
            setUser(currentUser)
            setUserBooks(currentUser.books)
            currentUser.error ? setLoggedIn(false) : setLoggedIn(true)
        })
    }, [])

    const signup = (user) => {
        setUser(user)
        setLoggedIn(true)
    }

    const login = (user) => {
        setUser(user)
        setLoggedIn(true)
    }

    const logout = () => {
        setUser({})
        setLoggedIn(false)
    }

    return(
        <UserContext.Provider value={{user, signup, login, logout, loggedIn, userBooks}}>
            {children}
        </UserContext.Provider>
    )

}

export { UserContext, UserProvider }