import React from 'react'
import { Link } from 'react-router-dom'

const NoteItem = ({ note }) => {
    return (
        <Link to={`/note/${note.id}`}>
            <div>
                <h3>{note.body}</h3>
            </div>
        </Link>
    )
}

export default NoteItem