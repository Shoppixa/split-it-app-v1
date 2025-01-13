import { Link } from 'react-router-dom'
import './style.css'

const SideNavbar = () => {
    const side_nav_pages = [
        { url: '/dashboard', name: 'Dashboard' },
        { url: '/friends', name: 'My Friends' },
        { url: '/groups', name: 'My Groups' },
        { url: '/myexpenses', name: 'My Expenses' },
        { url: '', name: 'Previous Month Records' },
        { url: '', name: 'My Reports' },
        { url: '', name: 'Budget Tracker' },
        { url: '', name: 'Financial Goals' },
        { url: '', name: 'Milestones' },
        { url: '', name: 'Loan Calculator' },
        { url: '', name: 'Currency Converter' },
        { url: '', name: 'Update Details' },
    ]
    return (
        <div>
            <ul className="list-group">
                {side_nav_pages.map((page) => (
                    <p key={page.name} className="shadow py-1">
                        <Link to={page.url} className="text-dark text-decoration-none">
                            {page.name}
                        </Link>
                    </p>
                ))}
            </ul>
        </div>
    )
}
export default SideNavbar
