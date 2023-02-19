import { useState } from "react"

function AddBookForm() {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [genre, setGenre] = useState('')
    const [description, setDescription] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        fetch('/books', {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({
                title: title,
                author: author,
                genre: genre,
                description: description
            })
        })
        .then(res => res.json())
        .then(book => console.log(book))
    }

    return(
        <form className="container" onSubmit={(e) => handleSubmit(e)}>
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
            <button type="submit">Submit</button>
        </form>
    )

}

export default AddBookForm