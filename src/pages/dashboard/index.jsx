import LeftMenu from '../../components/dashboard/left_menu/index.jsx'
import RightMenu from '../../components/dashboard/right_menu/index.jsx'
import DashboardMainContent from '../../components/dashboard/dashboard_main_content/index.jsx'

const UserDashboard = () => {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center text-center my-2">
                <div className="col-md-2 justify-content-center">
                    <LeftMenu />
                </div>
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
