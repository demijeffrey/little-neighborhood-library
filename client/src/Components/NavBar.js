import { useContext } from "react"
import { UserContext } from "../context/user"

function NavBar() {

    const {user, logout} = useContext(UserContext)

    function logoutUser() {
        fetch('/logout', {
            method: 'DELETE'
        })
        .then(() => {
            logout()
        })
    }

    if(!user) {
        return(
            <div>
                <ul className="nav justify-content-end">
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
            <div>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
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