import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const SingleNote = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [note, setNote] = useState(null);


    // get note
    useEffect(() => {
        getNote()
    }, [id])

    const getNote = async () => {
        if (id === 'new') return
        let response = await fetch(`http://127.0.0.1:8000/api/notes/${id}/`)
        let data = await response.json()
        setNote(data)
    }


    // edit or update note

    const editNote = async () => {
        await fetch(`http://127.0.0.1:8000/api/notes/${id}/update/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
    }


    // delete note

    const deleteNote = async () => {
        await fetch(`http://127.0.0.1:8000/api/notes/${id}/delete/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        navigate('/')
    }


    // create note 

    const createNote = async () => {
        await fetch(`http://127.0.0.1:8000/api/notes/create/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
    }


    // handle submit

    const handleSubmit = () => {
        if (id !== 'new' && note.body === '') {  // it's not a new note and there are no note body then go ahead and delete
            deleteNote();
        } else if (id !== 'new') {
            editNote();
        } else if (id === 'new' && note !== null) {
            createNote();
        }
        navigate('/');
    }


    // delete note with change text 

    const handleChange = (value) => {
        setNote(note => ({ ...note, 'body': value }))
    }


    return (
        <div className='note'>
            <div className="note-header">
                <FontAwesomeIcon onClick={handleSubmit} icon={faArrowLeft} />

                {/* condition for delete and done button */}
                {id !== 'new' ? (
                    <button onClick={deleteNote}>Delete</button>
                ) : (
                    <button onClick={handleSubmit}>Done</button>
                )}
            </div>
            <textarea onChange={(e) => { handleChange(e.target.value) }} value={note?.body}></textarea>
        </div>
    )
}

export default SingleNote