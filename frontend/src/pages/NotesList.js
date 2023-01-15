import React, { useEffect, useState } from 'react'

const NotesList = () => {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/notes')
            .then(response => response.json())
            .then(data => console.log(data))
    }, [])

    return (
        <div>NotesList</div>
    )
}

export default NotesList