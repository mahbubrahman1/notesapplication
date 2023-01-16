import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const CreateButton = () => {
    return (
        <Link to='/note/new' className='floating-button'>
            <FontAwesomeIcon icon={faPlus} />
        </Link>
    )
}

export default CreateButton