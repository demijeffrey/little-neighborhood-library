import { useState } from "react"

function AddBookForm() {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [genre, setGenre] = useState('')
    const [description, setDescription] = useState('')

    return(
        <form className="container">
            <div className="mb-3">
                <label className="form-label">Title</label>
                <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="mb-3">
                <label className="form-label">Author</label>
                <input type="text" className="form-control" value={author} onChange={(e) => setAuthor(e.target.value)} />
            </div>
            <div className="mb-3">
                <label className="form-label">Genre</label>
                <input type="text" className="form-control" value={genre} onChange={(e) => setGenre(e.target.value)} />
            </div>
            <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea className="form-control" rows="3" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            </div>
        </form>
    )

}

export default AddBookForm