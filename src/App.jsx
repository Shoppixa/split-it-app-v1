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
import Groups from './pages/groups/groups.jsx'
import Group from './pages/groups/group.jsx'

function App() {
    useEffect(() => {
        document.title = import.meta.env.VITE_APP_TITLE || 'Splitzy'
    }, [])
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route element={<ProtectedRoute />}>
                        <Route path="/dashboard" element={<UserDashboard />} />
                        <Route path="/groups" element={<Groups />} />
                        <Route path="/group/:id" element={<Group />} />
                    </Route>

                    <Route path="/login" element={<LoginPage />} />
                    {/*<Route path="/edit-profile" element={<EditProfile/>} />*/}
                    <Route path="/register" element={<RegisterPage />} />
                    {/*<Route path="*" element={<PageNotFound/>} />*/}
                </Routes>
                <Footer />
            </div>
        </Router>
    )
}

export default App
