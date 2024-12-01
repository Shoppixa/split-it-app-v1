import { Navigate, Outlet } from 'react-router-dom'
import * as React from 'react'

// ProtectedRoute component
const ProtectedRoute = () => {
    const isAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated'))

    return <>{isAuthenticated ? <Outlet /> : <Navigate to="/login" />}</>
}

export default ProtectedRoute
