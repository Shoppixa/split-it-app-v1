import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Alert } from '@mui/material'
import PropTypes from 'prop-types'
import { resetMessages } from '../../../features/auth/authSlice.js'

const CustomMessage = ({ successMessage, errorMessage }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        if (successMessage || errorMessage) {
            const timer = setTimeout(() => {
                dispatch(resetMessages())
            }, 30000)
            return () => clearTimeout(timer) // Cleanup timer on unmount
        }
    }, [successMessage, errorMessage, dispatch])

    return (
        <div className="my-4">
            {successMessage && (
                <Alert variant="outlined" severity="success">
                    {successMessage}
                </Alert>
            )}
            {errorMessage && (
                <Alert variant="outlined" severity="error">
                    {errorMessage}
                </Alert>
            )}
        </div>
    )
}

CustomMessage.propTypes = {
    successMessage: PropTypes.string, // Optional string prop
    errorMessage: PropTypes.string, // Optional string prop
}

// Set default props (optional)
CustomMessage.defaultProps = {
    successMessage: null,
    errorMessage: null,
}

export default CustomMessage
