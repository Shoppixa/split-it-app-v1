import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'

const FriendList = () => {
    const friends = [
        { value: 'Test User 1', label: 'Test User 1' },
        { value: 'Test User 2', label: 'Test User 2' },
        { value: 'Test User 3', label: 'Test User 3' },
        { value: 'Test User 4', label: 'Test User 4' },
    ]
    return (
        <div>
            <h6 className="p-2 mb-3 shadow text-center fw-bolder">
                <Link to="/friends" className="text-decoration-none text-dark">
                    My Friends
                </Link>
            </h6>
            <div className="list-group shadow-5-strong my-2">
                {friends.map((friend) => (
                    <div
                        key={friend.value}
                        className="list-group-item border-0 d-flex justify-content-between align-items-center shadow mb-2"
                    >
                        <Link
                            to={`/user/${friend.value}`}
                            className="d-flex align-items-center text-decoration-none text-dark"
                        >
                            <img
                                src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                alt=""
                                style={{ width: '45px', height: '45px' }}
                                className="rounded-circle ms-0"
                            />
                            <div className="ms-3">
                                <p className="mb-1">{friend.label}</p>
                            </div>
                        </Link>
                        <Button className="bg-danger text-light mx-2">
                            <DeleteIcon /> Remove Friend
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default FriendList
