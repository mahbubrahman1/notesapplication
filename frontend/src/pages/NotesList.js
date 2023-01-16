import React, { useEffect, useState } from 'react'
import CreateButton from '../components/CreateButton'
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
            <div className="notes-header">
                <h2 className='notes-title'>&#9782; Notes</h2>
                <p className='notes-count'>{notes.length}</p>
            </div>
            <div className='notes-list'>
                {
                    notes.map(note => (
                        <NoteItem key={note.id} note={note} />
                    ))
                }
            </div>
            <CreateButton />
        </div>
    )
}

export default NotesList