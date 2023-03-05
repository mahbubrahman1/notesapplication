import React, { useEffect, useState } from 'react'
import CreateButton from '../components/CreateButton'
import NoteItem from '../components/NoteItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNoteSticky } from '@fortawesome/free-solid-svg-icons'


const NotesList = () => {
    const [notes, setNotes] = useState([])
    const [matchedNotes, setMatchedNotes] = useState([])
    const [searchText, setSearchText] = useState('')


    useEffect(() => {
        getNotes()
    }, [])

    // get notes 
    const getNotes = async () => {
        const response = await fetch(`http://127.0.0.1:8000/api/notes`)
        const data = await response.json()
        setNotes(data)
        setMatchedNotes(data)
    }


    // note search 
    const handleSearchField = e => {
        const searchInput = e.target.value
        setSearchText(searchInput)
        const matchedNotes = notes.filter(note => note.body.toLowerCase().includes(searchInput.toLowerCase()))
        setMatchedNotes(matchedNotes)
    }


    return (
        <div>
            <div className="notes-header">
                <h2 className='notes-title'><FontAwesomeIcon icon={faNoteSticky} /> Notes</h2>
                <p className='notes-count'>{notes.length}</p>
            </div>
            <div>
                <input onChange={handleSearchField} type='text'></input>
            </div>
            <div className='notes-list'>
                {
                    matchedNotes.map(note => (
                        <NoteItem key={note.id} note={note} />
                    ))
                }
            </div>
            <CreateButton />
        </div>
    )
}


export default NotesList