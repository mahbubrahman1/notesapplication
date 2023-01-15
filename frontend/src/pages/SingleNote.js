import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const SingleNote = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [note, setNote] = useState(null);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/note/${id}`)
            .then(response => response.json())
            .then(data => setNote(data))
    }, [id])

    // edit or update note
    const editNote = () => {
        fetch(`http://127.0.0.1:8000/api/note/${id}/update/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
    }

    // handle submit
    const handleSubmit = () => {
        editNote();
        navigate('/');
    }

    return (
        <div className='note'>

            {/* back button icon */}
            <div className="note-header">
                <FontAwesomeIcon className='back-button' onClick={handleSubmit} icon={faArrowLeft} size='2x' />
            </div>

            {/* note area */}
            <textarea onChange={(e) => { setNote({ ...note, 'body': e.target.value }) }} defaultValue={note?.body}></textarea>
        </div >
    )
}

export default SingleNote