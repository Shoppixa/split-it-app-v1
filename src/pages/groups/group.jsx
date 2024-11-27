import { Link, useParams } from 'react-router-dom'
import LeftMenu from '../../components/dashboard/left_menu/index.jsx'
import RightMenu from '../../components/dashboard/right_menu/index.jsx'
import GroupDetails from '../../components/groups/group_details.jsx'

const Group = () => {
    let { id } = useParams()
    return (
        <div className="container-fluid">
            <div className="row justify-content-center text-center my-2">
                <div className="col-md-2 justify-content-center">
                    <LeftMenu />
                </div>
                <div className="col-md-8">
                    <GroupDetails />
                </div>
                <div className="col-md-2">
                    <RightMenu />
                </div>
            </div>
        </div>
        // <div className="text-center m-3">
        //                 <h6 className="p-2 mb-3 shadow text-center fw-bolder">
        //         <Link to="/groups" className="text-decoration-none text-dark">
        //             My Groups
        //         </Link>
        //     </h6>
        //     group id: {id}
        // </div>
    )
}
export default Group
