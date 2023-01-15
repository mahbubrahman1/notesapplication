import React from 'react'

const NoteItem = ({ note }) => {
    return (
        <div>
            <h3>{note.body}</h3>
        </div>
    )
}

export default NoteItem