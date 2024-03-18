import LeftMenu from '../../components/dashboard/left_menu/left_side_navbar.jsx'

const UserDashboard = () => {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center text-center">
                <h5>Dashboard</h5>
                <div className="col-md-2 justify-content-center">
                    <LeftMenu />
                </div>
                <div className="col-md-8"></div>
                <div className="col-md-2"></div>
            </div>
        </div>
    )
}
export default UserDashboard
