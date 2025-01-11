import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Alert } from '@mui/material'
import PropTypes from 'prop-types'
import { resetMessages } from '../../../store/userSlice.js'

const CustomMessage = ({ message, statusCode }) => {
    const dispatch = useDispatch()
    const success_status_code_list = [200, 201]
    const severity = success_status_code_list.includes(statusCode) ? 'success' : 'error';

    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                dispatch(resetMessages())
            }, 10000)
            return () => clearTimeout(timer) // Cleanup timer on unmount
        }
    }, [message, dispatch])

    return (
        <div className="my-4">
            {message && (
                <Alert variant="outlined" severity={severity}>
                    {message}
                </Alert>
            )}
        </div>
    )
}

CustomMessage.propTypes = {
    message: PropTypes.string, // Optional string prop
}

export default CustomMessage
