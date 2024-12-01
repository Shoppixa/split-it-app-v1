import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'

const GroupList = () => {
    let groups = [
        { id: 1, name: 'Test Group 1' },
        { id: 2, name: 'Test Group 2' },
        { id: 3, name: 'Test Group 3' },
        { id: 4, name: 'Test Group 4' },
        { id: 5, name: 'Test Group 5' },
        { id: 6, name: 'Test Group 6' },
    ]

    return (
        <div>
            <h6 className="p-2 my-3 shadow text-center fw-bolder">
                <Link to="/groups" className="text-decoration-none text-dark">
                    My Groups
                </Link>
            </h6>

            <div className="list-group shadow-5-strong my-2">
                {groups.map((group) => (
                    <div
                        key={group.id}
                        className="list-group-item border-0 d-flex justify-content-between align-items-center shadow mb-2"
                    >
                        <div className="d-flex align-items-center">
                            <img
                                src="https://mdbootstrap.com/img/new/avatars/15.jpg"
                                alt=""
                                style={{ width: '45px', height: '45px' }}
                                className="rounded-circle ms-0"
                            />
                            <div className="ms-3">
                                <Link
                                    to={`/group/${group.id}`}
                                    className="mb-1 text-decoration-none text-dark"
                                >
                                    {group.name}
                                </Link>
                            </div>
                        </div>

                        <Link
                            to={`/group/${group.id}`}
                            className="text-decoration-none"
                        >
                            View
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default GroupList
