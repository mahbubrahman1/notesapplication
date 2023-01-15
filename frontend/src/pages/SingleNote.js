import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleNote = () => {
    const { id } = useParams();
    const [note, setNote] = useState(null);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/note/${id}`)
            .then(response => response.json())
            .then(data => setNote(data))
    }, [id])

    return (
        <div>
            <h2>{note?.body}</h2>
        </div>
    )
}

export default SingleNote