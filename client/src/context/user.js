import React, { useState, useEffect } from "react"

const UserContext = React.createContext()

function UserProvider({ children }) {

    const [user, setUser] = useState({})
    const [loggedIn, setLoggedIn] = useState(false)
    const [userReviews, setUserReviews] = useState(null)

    useEffect(() => {
        fetch('/current-user')
        .then(res => res.json())
        .then(currentUser => {
            setUser(currentUser)
            currentUser.error ? setLoggedIn(false) : setLoggedIn(true)
        })
    }, [userReviews])
    // console.log(user.reviews)

    const addUserReview = (review) => {
        setUserReviews([user.reviews, review])
    }

    const removeUserReview = (id) => {
        const newList = user.reviews.filter(r => r.id !== id)
        setUserReviews(newList)
    }

    const updateUserReviews = (review) => {
        const newList = user.reviews.map(r => {
            if(r.id === review.id) {
                return review
            } else {
                return r
            }
        })
        setUserReviews(newList)
    }

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
        <UserContext.Provider value={{user, signup, login, logout, loggedIn, addUserReview, removeUserReview, updateUserReviews}}>
            {children}
        </UserContext.Provider>
    )

}

export { UserContext, UserProvider }