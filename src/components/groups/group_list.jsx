import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import { Alert, TextField } from '@mui/material'
import Select from 'react-select'
import PersonAddIcon from '@mui/icons-material/PersonAdd.js'
import getRandomString from '../../utils/get_random_string.jsx'

const GroupList = () => {
    let groups = [
        { id: 1, name: 'Test Group 1' },
        { id: 2, name: 'Test Group 2' },
        { id: 3, name: 'Test Group 3' },
        { id: 4, name: 'Test Group 4' },
        { id: 5, name: 'Test Group 5' },
        { id: 6, name: 'Test Group 6' },
    ]
    let [isVisibleAlert, setIsVisibleAlert] = useState(false)
    let [isVisibleAddGroup, setIsVisibleAddGroup] = useState(false)
    const [addGroupSuccess, setAddGroupSuccess] = useState('false')
    const [isVisibleCloseButton, setIsVisibleCloseButton] = useState(false)

    const handleAddGroupButtonClick = (e) => {
        e.preventDefault()
        isVisibleAddGroup
            ? (setIsVisibleAlert(true),
              setAddGroupSuccess(getRandomString('true', 'false')))
            : (setIsVisibleAddGroup(true), setIsVisibleCloseButton(true)) // Show the component
    }

    const handleCloseAlertButton = () => {
        setIsVisibleAlert(false) // Show the component
    }
    const handleCloseAddGroupButtonClick = () => {
        setIsVisibleAlert(false)
        setIsVisibleAddGroup(false)
        // setIsVisibleUserSelect(false)
        setIsVisibleCloseButton(false) // Show the component
    }
    const options = [
        { value: 'Test User 99', label: 'Test User 99' },
        { value: 'Test User 100', label: 'Test User 100' },
        { value: 'Test User 97', label: 'Test User 97' },
        { value: 'Test User 98', label: 'Test User 98' },
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
            <div className="my-5 row justify-content-center">
                {isVisibleAlert && (
                    <>
                        {addGroupSuccess === 'true' ? (
                            <Alert
                                className=" my-2"
                                severity="success"
                                onClose={handleCloseAlertButton}
                                style={{ maxWidth: '800px' }}
                            >
                                New participants added successfully.
                            </Alert>
                        ) : (
                            <Alert
                                className="my-2"
                                severity="error"
                                onClose={handleCloseAlertButton}
                                style={{ maxWidth: '800px' }}
                            >
                                Could not add participants to the group.
                            </Alert>
                        )}
                    </>
                )}

                {isVisibleAddGroup && (
                    <div className="">
                        <TextField
                            fullWidth
                            color="primary"
                            id="outlined-basic"
                            label="Group Name"
                            variant="outlined"
                        />
                        <Select
                            className="my-2"
                            options={options}
                            isMulti
                            closeMenuOnSelect={false}
                        />
                    </div>
                )}
                <Button
                    className="bg-primary text-light mx-2 px-3 my-2"
                    style={{ maxWidth: '250px' }}
                    onClick={handleAddGroupButtonClick}
                >
                    <PersonAddIcon className="mx-2" /> Add Group
                </Button>
                {isVisibleCloseButton && (
                    <Button
                        className="bg-primary text-light mx-2 px-3 my-2"
                        style={{ maxWidth: '100px' }}
                        onClick={handleCloseAddGroupButtonClick}
                    >
                        Close
                    </Button>
                )}
            </div>
        </div>
    )
}
export default GroupList
