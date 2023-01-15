import React, { useEffect, useState } from 'react'
import NoteItem from '../components/NoteItem'

const NotesList = () => {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/notes/')
            .then(response => response.json())
            .then(data => setNotes(data))
    }, [])

    return (
        <div>
            <p>NotesList {notes.length}</p>
            {
                notes.map(note => (
                    <NoteItem key={note.id} note={note} />
                ))
            }
        </div>
    )
}

export default NotesList