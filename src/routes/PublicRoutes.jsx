// ProtectedRoute component
import { lazy } from 'react'

// project import
import Loadable from '../components/Loadable'
import MinimalLayout from '../layout/MinimalLayout'

// render - dashboard
const Home = Loadable(lazy(() => import('../pages/home')))
const LoginPage = Loadable(lazy(() => import('../pages/login')))
const RegisterPage = Loadable(lazy(() => import('../pages/register')))

const PublicRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: '/home',
            element: <Home />,
        },
        {
            path: '/login',
            element: <LoginPage />,
        },
        {
            path: '/register',
            element: <RegisterPage />,
        },
    ],
}

export default PublicRoutes
