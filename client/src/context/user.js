import React, { useState, useEffect } from "react"

const UserContext = React.createContext()

function UserProvider({ children }) {

    const [user, setUser] = useState(null)

    useEffect(() => {
        fetch('/current-user')
        .then(res => res.json())
        .then(currentUser => {
            setUser(currentUser)
        })
    }, [])

    const signup = (user) => {
        setUser(user)
    }

    const login = (user) => {
        setUser(user)
    }

    const logout = () => {
        setUser(null)
    }

    return(
        <UserContext.Provider value={{user, signup, login, logout}}>
            {children}
        </UserContext.Provider>
    )

}

export { UserContext, UserProvider }