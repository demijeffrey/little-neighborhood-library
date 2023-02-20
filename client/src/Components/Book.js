import { useLocation } from "react-router-dom"

function Book() {

    const { state } = useLocation()
    const { book } = state

    console.log(book)

    return(
        <div>{book}</div>
    )

}

export default Book