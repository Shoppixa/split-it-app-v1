import Button from '@mui/material/Button'
import { useState } from 'react'

const UserProfileDetails = () => {
    const [isFriends, setIsFriends] = useState(false)
    const [isFriendRequestSent, setIsFriendRequestSent] = useState(false)
    // const [isFriends, setIsFriends] = useState();

    const handleAddFriend = () => {
        setIsFriendRequestSent(true)
    }
    const handleCancelFriendRequest = () => {
        setIsFriendRequestSent(false)
        setIsFriends(true)
    }

    const handleRemoveFriend = () => {
        setIsFriends(false)
    }
    return (
        <div>
            <h6 className="p-2 my-3 shadow text-center fw-bolder rounded-4">
                <div className="text-decoration-none text-dark">
                    {/*{props.user.name}*/}
                    Koushik Mallik
                </div>
            </h6>

            <div className="d-flex justify-content-center align-items-center p-2 shadow shadow-5 rounded-4">
                <div className="m-2">
                    <img
                        src="https://mdbootstrap.com/img/new/avatars/15.jpg"
                        alt=""
                        style={{ width: '100px', height: '100px' }}
                        className="rounded-circle ms-0"
                    />
                </div>
            </div>
            <div className="my-2 p-2 p-2 shadow shadow-5 rounded-4">
                <h6 className="text-center">
                    <h5 className="text-dark">Account Details</h5>
                </h6>

                <div className="row justify-content-center mt-4">
                    <div className="col-6">
                        <div>
                            <h6>
                                <b>Name</b>: Koushik Mallik
                            </h6>
                            <h6>
                                <b>Email</b>: abcd@gmail.com
                            </h6>
                            <h6>
                                <b>Date Of Birth</b>: 10/04/2003
                            </h6>
                            <h6>
                                <b>Phone Number</b>: +91 9876543210
                            </h6>
                        </div>
                        {!isFriends && !isFriendRequestSent && (
                            <Button
                                variant="contained"
                                className="my-3 mx-2"
                                onClick={handleAddFriend}
                            >
                                Add Friend
                            </Button>
                        )}
                        {!isFriends && isFriendRequestSent && (
                            <Button
                                variant="contained"
                                className="my-3 mx-2"
                                onClick={handleCancelFriendRequest}
                            >
                                Friend Request Sent
                            </Button>
                        )}
                        {isFriends && (
                            <Button
                                variant="contained"
                                className="my-3 mx-2"
                                onClick={handleRemoveFriend}
                            >
                                Friends
                            </Button>
                        )}
                        <Button variant="contained" className="my-3 mx-2">
                            Export Details
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UserProfileDetails
