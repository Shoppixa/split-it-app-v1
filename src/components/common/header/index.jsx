import AppNavbar from './navbar/index.jsx'
import './style.css'

const Header = () => {
    return (
        <div className="header">
            <AppNavbar
                is_logged_in={false}
                app_name={import.meta.env.VITE_APP_NAME}
            />
        </div>
    )
}
export default Header
