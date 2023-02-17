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

    return(
        <UserContext.Provider value={{user}}>
            {children}
        </UserContext.Provider>
    )

}

export { UserContext, UserProvider }