import { Navigate, Outlet } from 'react-router-dom'
import * as React from 'react'
import { useSelector } from 'react-redux'

// ProtectedRoute component
const ProtectedRoute = () => {
    const { isLoggedIn } = useSelector((state) => state.auth)

    return <>{isLoggedIn ? <Outlet /> : <Navigate to="/login" />}</>
}

export default ProtectedRoute
