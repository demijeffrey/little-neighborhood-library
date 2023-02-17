import { useContext } from "react"
import { UserContext } from "../context/user"

function Home() {
    const { user } = useContext(UserContext)

    if (!user || user.errors) {
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