import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'

const FriendList = () => {
    return (
        <div>
            <h6 className="p-2 mb-3 shadow text-center fw-bolder">
                <Link to="/friends" className="text-decoration-none text-dark">
                    My Friends
                </Link>
            </h6>

            <div className="list-group shadow-5-strong my-2">
                <div className="list-group-item border-0 d-flex justify-content-between align-items-center shadow mb-2">
                    <div className="d-flex align-items-center">
                        <img
                            src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                            alt=""
                            style={{ width: '45px', height: '45px' }}
                            className="rounded-circle ms-0"
                        />
                        <div className="ms-3">
                            <p className="mb-1">John Doe</p>
                        </div>
                    </div>
                </div>
                <div className="list-group-item border-0 d-flex justify-content-between align-items-center shadow mb-2">
                    <div className="d-flex align-items-center">
                        <img
                            src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                            alt=""
                            style={{ width: '45px', height: '45px' }}
                            className="rounded-circle ms-0"
                        />
                        <div className="ms-3">
                            <p className="mb-1">John Doe</p>
                        </div>
                    </div>
                </div>
                <div className="list-group-item border-0 d-flex justify-content-between align-items-center shadow mb-2">
                    <div className="d-flex align-items-center">
                        <img
                            src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                            alt=""
                            style={{ width: '45px', height: '45px' }}
                            className="rounded-circle ms-0"
                        />
                        <div className="ms-3">
                            <p className="mb-1">John Doe</p>
                        </div>
                    </div>
                </div>
                <div className="list-group-item border-0 d-flex justify-content-between align-items-center shadow mb-2">
                    <div className="d-flex align-items-center">
                        <img
                            src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                            alt=""
                            style={{ width: '45px', height: '45px' }}
                            className="rounded-circle ms-0"
                        />
                        <div className="ms-3">
                            <p className="mb-1">John Doe</p>
                        </div>
                    </div>
                </div>
                <div className="list-group-item border-0 d-flex justify-content-between align-items-center shadow mb-2">
                    <div className="d-flex align-items-center">
                        <img
                            src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                            alt=""
                            style={{ width: '45px', height: '45px' }}
                            className="rounded-circle ms-0"
                        />
                        <div className="ms-3">
                            <p className="mb-1">John Doe</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FriendList
