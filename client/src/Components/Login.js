import { useState, useContext } from "react"
import { UserContext } from "../context/user"

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const {login} = useContext(UserContext)

    function handleSubmit(e) {
        e.preventDefault()
        fetch('/login', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then(res => res.json())
        .then(user => {
            login(user)
            setError(user.error)
        })
    }

    return(
        <div>
            <form className="container" onSubmit={(e) => handleSubmit(e)}>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Username</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
            {error}
        </div>
    )

}

export default Login