function Signup() {

    return(
        <div>
            <form className="container">
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Username</label>
                    <div className="col-sm-10">
                    <input type="email" className="form-control" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                    <input type="password" className="form-control" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Password Confirmation</label>
                    <div className="col-sm-10">
                    <input type="password_confirmation" className="form-control" />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
        </div>
    )

}

export default Signup