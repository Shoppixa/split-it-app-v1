import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Header from './components/common/header/index.jsx'
import Footer from './components/common/footer/index.jsx'
import Homepage from './pages/home/index.jsx'
import { useEffect } from 'react'
import UserDashboard from './pages/dashboard/index.jsx'
import ProtectedRoute from './components/protected_component/index.jsx'
import LoginPage from './pages/login/index.jsx'
import RegisterPage from './pages/register/index.jsx'
import Group from './pages/groups/group.jsx'
import ExpenseDetails from './pages/expense/index.jsx'
import Friends from './pages/friends/index.jsx'
import Groups from './pages/groups/index.jsx'
import MyExpenses from './pages/my_expenses/index.jsx'
import Profile from './pages/profile/index.jsx'
import UserProfile from './pages/user_profile/index.jsx'
import VerifyOTP from './pages/verify-otp/index.jsx'
import { store } from './app/store.js'
import { Provider } from 'react-redux'

function App() {
    useEffect(() => {
        document.title = import.meta.env.VITE_APP_TITLE || 'Splitzy'
    }, [])
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Header />
                    <Routes>
                        <Route path="/" element={<Homepage />} />
                        <Route element={<ProtectedRoute />}>
                            <Route
                                path="/dashboard"
                                element={<UserDashboard />}
                            />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/groups" element={<Groups />} />
                            <Route path="/friends" element={<Friends />} />
                            <Route
                                path="/myexpenses"
                                element={<MyExpenses />}
                            />
                            <Route path="/group/:id" element={<Group />} />
                            <Route path="/user/:id" element={<UserProfile />} />
                            <Route
                                path="/expense/:id"
                                element={<ExpenseDetails />}
                            />
                        </Route>
                        <Route path="/verify-otp" element={<VerifyOTP />} />
                        <Route path="/login" element={<LoginPage />} />
                        {/*<Route path="/edit-profile" element={<EditProfile/>} />*/}
                        <Route path="/register" element={<RegisterPage />} />
                        {/*<Route path="*" element={<PageNotFound/>} />*/}
                    </Routes>
                    <Footer />
                </div>
            </Router>
        </Provider>
    )
}

export default App
