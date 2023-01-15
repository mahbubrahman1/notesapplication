import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const SingleNote = () => {
    const { id } = useParams();
    const [note, setNote] = useState(null);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/note/${id}`)
            .then(response => response.json())
            .then(data => setNote(data))
    }, [id])

    return (
        <div className='note'>
            <div className="note-header">
                <Link to='/'>
                    <FontAwesomeIcon icon={faArrowLeft} size='2x' />
                </Link>
            </div>
            <textarea defaultValue={note?.body}></textarea>
        </div >
    )
}

export default SingleNote