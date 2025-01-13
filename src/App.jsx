import './App.css'
import Header from './components/common/header/index.jsx'
import Footer from './components/common/footer/index.jsx'
import { Toaster } from 'react-hot-toast'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

function App() {
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
            <Toaster />
            {/* </GlobalProvider> */}
        </>
    )
}

export default App
