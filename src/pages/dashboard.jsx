import RightMenu from '../components/dashboard/right_menu/index.jsx'
import DashboardMainContent from '../components/dashboard/dashboard_main_content/index.jsx'

const UserDashboard = () => {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center text-center">
                <h5>Dashboard</h5>
                <div className="col-md-8">
                    <DashboardMainContent />
                </div>
                <div className="col-md-2">
                    <RightMenu />
                </div>
            </div>
        </div>
    )
}
export default UserDashboard
