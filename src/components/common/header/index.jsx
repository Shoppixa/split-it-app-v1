import AppNavbar from './navbar/index.jsx'
import './style.css'

const Header = () => {
    return (
        <div className="header">
            <AppNavbar is_logged_in={false} />
        </div>
    )
}
export default Header
