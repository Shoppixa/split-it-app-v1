// ProtectedRoute component
import { lazy } from 'react'

// project import
import Loadable from '../components/Loadable'
import MainLayout from '../layout/MainLayout'

// render - dashboard
const Dashboard = Loadable(lazy(() => import('../pages/dashboard')))

// const isAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated'))
// const PrivateRoute = ({ element, ...rest }) => {
//     return (
//         <>
//             {isAuthenticated ? <element {...rest} /> : <Navigate to="/login" />}
//         </>
//     )

// }

const ProtectedRoute = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/dashboard',
            element: <Dashboard />,
        },
    ],
}

export default ProtectedRoute
