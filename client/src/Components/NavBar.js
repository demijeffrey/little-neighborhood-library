import { useContext } from "react"
import { UserContext } from "../context/user"
import { NavLink, useNavigate } from "react-router-dom"
import '../App.css';

function NavBar() {

    const { logout, loggedIn } = useContext(UserContext)
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

    // if(!loggedIn) {
    //     return(
    //         <div className="title" data-bs-theme="dark">
    //             <h3>Little Neighborhood Library</h3>
    //             <ul className="nav justify-content-end bg-dark">
    //                 <li className="nav-item">
    //                     <a className="nav-link active" aria-current="page" href="/">Home</a>
    //                 </li>
    //                 <li className="nav-item">
    //                     <a className="nav-link" href="/signup">Signup</a>
    //                 </li>
    //                 <li className="nav-item">
    //                     <a className="nav-link" href="/login">Login</a>
    //                 </li>
    //             </ul>
    //         </div>
    //     )
    // } else {
    //     return(
    //         <div className="title" data-bs-theme="dark">
    //             <h3>Little Neighborhood Library</h3>
    //             <ul className="nav justify-content-end">
    //                 <li className="nav-item">
    //                     <a className="nav-link active" aria-current="page" href="/">My Home</a>
    //                 </li>
    //                 <li className="nav-item">
    //                     <a className="nav-link" href="/books">Books</a>
    //                 </li>
    //                 <button onClick={logoutUser}>Logout</button>
    //             </ul>
    //         </div>
    //     )
    // }

    if(!loggedIn) {
        return(
            <div className="title" data-bs-theme="dark">
                <h3>Little Neighborhood Library</h3>
                <ul className="nav justify-content-end bg-dark">
                    <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/signup">Signup</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/login">Login</NavLink>
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
                        <NavLink className="nav-link active" aria-current="page" to="/">My Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/books">Books</NavLink>
                    </li>
                    <button onClick={logoutUser}>Logout</button>
                </ul>
            </div>
        )
    }

}

export default NavBar