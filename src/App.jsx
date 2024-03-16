import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Header from './components/common/header/index.jsx'
import Footer from './components/common/footer/index.jsx'
import Homepage from './pages/home/index.jsx'
import { useEffect } from 'react'

function App() {
    useEffect(() => {
        document.title = import.meta.env.VITE_APP_TITLE || 'ECOM App'
    }, [])
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    {/*                     <Route path="/dashboard" element={<Dashboard/>}/> */}
                    {/*<Route path="/edit-profile" element={<EditProfile/>} />*/}
                    {/*                     <Route path="/groups" element={<Dashboard/>}/> */}
                    {/*                     <Route path="/friends" element={<Dashboard/>}/> */}
                    {/*                     <Route path="/login" element={<Loginpage/>}/> */}
                    {/*                     <Route path="/register" element={<RegisterPage/>}/> */}
                    {/*<Route path="*" element={<PageNotFound/>} />*/}
                </Routes>
                <Footer />
            </div>
        </Router>
    )
}

export default App
