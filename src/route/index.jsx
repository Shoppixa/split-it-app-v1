import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Homepage from '../pages/home/index.jsx'
import UserDashboard from '../pages/dashboard/index.jsx'
import ProtectedRoute from '../components/protected_component/index.jsx'
import LoginPage from '../pages/login/index.jsx'
import RegisterPage from '../pages/register/index.jsx'
import Group from '../pages/groups/group.jsx'
import ExpenseDetails from '../pages/expense/index.jsx'
import Friends from '../pages/friends/index.jsx'
import Groups from '../pages/groups/index.jsx'
import MyExpenses from '../pages/my_expenses/index.jsx'
import Profile from '../pages/profile/index.jsx'
import UserProfile from '../pages/user_profile/index.jsx'
import VerifyOTP from '../pages/verify-otp/index.jsx'
import FriendSearchPage from '../pages/friend_search/index.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <Homepage />,
            },
            {
                path: 'login',
                element: <LoginPage />,
            },
            {
                path: 'register',
                element: <RegisterPage />,
            },
            // {
            //     path: "forgot-password",
            //     element: <ForgotPassword />
            // },
            {
                path: 'verify-otp',
                element: <VerifyOTP />,
            },
            // {
            //     path : "reset-password",
            //     element : <ResetPassword/>
            // },
            {
                path: 'dashboard',
                element: (
                    <ProtectedRoute>
                        <UserDashboard />
                    </ProtectedRoute>
                ),
            },
            {
                path: 'profile',
                element: (
                    <ProtectedRoute>
                        <Profile />
                    </ProtectedRoute>
                ),
            },
            {
                path: 'groups',
                element: (
                    <ProtectedRoute>
                        <Groups />
                    </ProtectedRoute>
                ),
            },
            {
                path: 'friends',
                element: (
                    <ProtectedRoute>
                        <Friends />
                    </ProtectedRoute>
                ),
            },
            {
                path: 'friend-search',
                element: (
                    <ProtectedRoute>
                        <FriendSearchPage />
                    </ProtectedRoute>
                ),
            },
            {
                path: 'myexpenses',
                element: (
                    <ProtectedRoute>
                        <MyExpenses />
                    </ProtectedRoute>
                ),
            },
            {
                path: '/group/:id',
                element: (
                    <ProtectedRoute>
                        <Group />
                    </ProtectedRoute>
                ),
            },
            {
                path: '/user/:id',
                element: (
                    <ProtectedRoute>
                        <UserProfile />
                    </ProtectedRoute>
                ),
            },
            {
                path: '/expense/:id',
                element: (
                    <ProtectedRoute>
                        <ExpenseDetails />
                    </ProtectedRoute>
                ),
            },
            // {
            //     path: "success",
            //     element: <Success />
            // },
            // {
            //     path: 'cancel',
            //     element: <Cancel />
            // }
        ],
    },
])

export default router
