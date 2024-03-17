import { Navigate } from 'react-router-dom'
import * as React from 'react'

// ProtectedRoute component
const ProtectedComponent = ({ element, ...rest }) => {
    const isAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated'))

    return (
        <>
            {isAuthenticated ? <element {...rest} /> : <Navigate to="/login" />}
        </>
    )
}

export default ProtectedComponent
