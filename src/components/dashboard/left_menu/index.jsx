import CurrentUserCard from '../current_user_card/index.jsx'
import SideNavbar from './side_navbar.jsx'

const LeftMenu = () => {
    return (
        <>
            <div className="row justify-content-center">
                <CurrentUserCard name={'Koushik Mallik'} />
                <h6 className="mt-2">Koushik Mallik</h6>
            </div>
            <hr className="mx-5 my-2" />
            <div className="row justify-content-center px-5 side-navbar">
                <SideNavbar />
            </div>
        </>
    )
}
export default LeftMenu
