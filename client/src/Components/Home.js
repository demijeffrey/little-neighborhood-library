import { useContext } from "react"
import { UserContext } from "../context/user"

function Home() {
    
    const { user, loggedIn } = useContext(UserContext)

    if (!loggedIn) {
        return(<h3>Sign Up or Login</h3>)
    } else {
        return(
            <div>
                <h2>Welcome {user.username}!</h2>
            </div>
        )
    }
    
}

export default Home