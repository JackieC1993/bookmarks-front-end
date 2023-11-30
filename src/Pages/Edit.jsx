import React from "react"
import EditBookmarkForm from "../Components/EditBookmarkForm.jsx"
import {Link} from 'react-router-dom'





export default function Edit() {
    return(
        <div>
        <EditBookmarkForm/>
        <button><Link to="/bookmarks">Back</Link></button>
        </div>
    )
}