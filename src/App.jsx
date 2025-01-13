import './App.css'
import Header from './components/common/header/index.jsx'
import Footer from './components/common/footer/index.jsx'
import { Toaster } from 'react-hot-toast'
import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { resetMessages } from './store/userSlice.js'

function App() {
    const dispatch = useDispatch()
    const location = useLocation()

    useEffect(() => {
        dispatch(resetMessages()) // Reset messages on route change
    }, [location.pathname, dispatch]) // Trigger when route changes

    useEffect(() => {
        document.title = import.meta.env.VITE_APP_TITLE || 'Splitzy'
    }, [])

    return (
        <>
            {/* <GlobalProvider> */}
            <Header />
            <main className="min-h-[78vh]">
                <Outlet />
            </main>
            <Footer />
            <Toaster
                position="top-right" // Default toast position
                toastOptions={{
                    // Default options for all toast types
                    duration: 3500,
                    style: {
                        borderRadius: '10px',
                        background: 'linear-gradient(to left, #4b6cb7, #182848)',
                        color: '#fff',
                    },
                    success: {
                        style: {
                            borderRadius: '10px',
                            background: 'linear-gradient(to left, #4b6cb7, #182848)',
                            color: '#fff',
                        },
                    },
                    error: {
                        style: {
                          borderRadius: '10px',
                          background: 'linear-gradient(to left,rgb(222, 135, 135),rgb(107, 11, 11))',
                          color: '#fff',
                        },
                    },
                }}
            />
            {/* </GlobalProvider> */}
        </>
    )
}

export default App
