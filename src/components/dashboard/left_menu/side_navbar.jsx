import { Link } from 'react-router-dom'
import './style.css'

const SideNavbar = () => {
    return (
        <div>
            <ul className="list-group">
                <p className="shadow py-1">
                    <Link
                        to="/dashboard"
                        className="text-dark text-decoration-none"
                    >
                        Dashboard
                    </Link>
                </p>
                <p className="shadow py-1">My Expenses</p>
                <p className="shadow py-1">Previous Month Records</p>
                <p className="shadow py-1">My Reports</p>
                <p className="shadow py-1">Budget Tracker</p>
                <p className="shadow py-1">Financial Goals</p>
                <p className="shadow py-1">Milestones</p>
                <p className="shadow py-1">Loan Calculator</p>
                <p className="shadow py-1">Currency Converter</p>
                <p className="shadow py-1">Update Details</p>
                <p className="shadow py-1">Currency Converter</p>
            </ul>
        </div>
    )
}
export default SideNavbar
