import { useContext } from "react"
import { UserContext } from "../context/user"
import { useNavigate } from "react-router-dom"
import '../App.css';

function NavBar() {

    const {user, logout, loggedIn} = useContext(UserContext)
    const navigate = useNavigate()

    function logoutUser() {
        fetch('/logout', {
            method: 'DELETE'
        })
        .then(() => {
            logout()
            navigate('/')
        })
    }

    if(!loggedIn) {
        return(
            <div className="title" data-bs-theme="dark">
                <h3>Little Neighborhood Library</h3>
                <ul className="nav justify-content-end bg-dark">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/signup">Signup</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/login">Login</a>
                    </li>
                </ul>
            </div>
        )
    } else {
        return(
            <div className="title" data-bs-theme="dark">
                <h3>Little Neighborhood Library</h3>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/books">Books</a>
                    </li>
                    <button onClick={logoutUser}>Logout</button>
                </ul>
            </div>
        )
    }

}

export default NavBar


// return(
//     <div>
//         <ul className="nav justify-content-end">
//             <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="/">Home</a>
//             </li>
//             <li className="nav-item">
//                 <a className="nav-link" href="/signup">Signup</a>
//             </li>
//             <li className="nav-item">
//                 <a className="nav-link" href="/login">Login</a>
//             </li>
//         </ul>
//     </div>
// )