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

    return(
        <UserContext.Provider value={{user, signup}}>
            {children}
        </UserContext.Provider>
    )

}

export { UserContext, UserProvider }