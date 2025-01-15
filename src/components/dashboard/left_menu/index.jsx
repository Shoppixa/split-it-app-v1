import CurrentUserCard from '../current_user_card/index.jsx'
import SideNavbar from './side_navbar.jsx'
import { useSelector } from 'react-redux'

const LeftMenu = () => {
    const { userDetails } = useSelector((state) => state.user)
    return (
        <>
            <div className="row justify-content-center">
                <CurrentUserCard name={userDetails.fname + ' ' + userDetails.lname} />
                <h6 className="mt-2">{userDetails.fname + ' ' + userDetails.lname}</h6>
            </div>
            <hr className="mx-5 my-2" />
            <div className="row justify-content-center px-5 side-navbar">
                <SideNavbar />
            </div>
        </>
    )
}
export default LeftMenu
