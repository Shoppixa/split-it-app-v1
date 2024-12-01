import LeftMenu from '../../components/dashboard/left_menu/index.jsx'
import RightMenu from '../../components/dashboard/right_menu/index.jsx'
import ProfileDetails from '../../components/user/profile.jsx'

const Profile = () => {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center text-center my-2">
                <div className="col-md-2 justify-content-center">
                    <LeftMenu />
                </div>
                <div className="col-md-8">
                    <ProfileDetails />
                </div>
                <div className="col-md-2">
                    <RightMenu />
                </div>
            </div>
        </div>
    )
}
export default Profile
