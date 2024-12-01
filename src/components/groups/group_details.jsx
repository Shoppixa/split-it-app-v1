import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'
import { Alert } from '@mui/material'
import Select from 'react-select'
import PersonAddIcon from '@mui/icons-material/PersonAdd.js'
import getRandomString from '../../utilities/get_random_string.jsx'

const GroupDetails = () => {
    let expenses = [
        { id: 1, name: 'Test Expense 1', amount: 100 },
        { id: 2, name: 'Test Expense 2', amount: -200 },
        { id: 3, name: 'Test Expense 3', amount: 400 },
        { id: 4, name: 'Test Expense 4', amount: -7100 },
        { id: 5, name: 'Test Expense 5', amount: 3100 },
        { id: 6, name: 'Test Expense 6', amount: -9100 },
    ]
    const options = [
        { value: 'Test User 99', label: 'Test User 99' },
        { value: 'Test User 100', label: 'Test User 100' },
        { value: 'Test User 97', label: 'Test User 97' },
        { value: 'Test User 98', label: 'Test User 98' },
    ]
    const [isVisibleUserSelect, setIsVisibleUserSelect] = useState(false) // Default: Hidden
    const [isVisibleAlert, setIsVisibleAlert] = useState(false) // Default: Hidden
    const [isVisibleCloseButton, setIsVisibleCloseButton] = useState(false) // Default: Hidden
    const [addUserSuccess, setAddUserSuccess] = useState('false')

    const handleAddUserButtonClick = (e) => {
        e.preventDefault()
        isVisibleUserSelect
            ? (setIsVisibleAlert(true),
              setAddUserSuccess(getRandomString('true', 'false')))
            : (setIsVisibleUserSelect(true), setIsVisibleCloseButton(true)) // Show the component
    }
    const handleCloseAlertButton = () => {
        setIsVisibleAlert(false) // Show the component
    }
    const handleCloseAddUserButtonClick = () => {
        setIsVisibleAlert(false)
        setIsVisibleUserSelect(false)
        setIsVisibleCloseButton(false) // Show the component
    }
    return (
        <div>
            <h6 className="p-2 my-3 shadow text-center fw-bolder">
                <Link to="/groups" className="text-decoration-none text-dark">
                    Test Group 1
                </Link>
            </h6>

            <div className="list-group shadow-5-strong my-2">
                {expenses.map((expense) => (
                    <div
                        key={expense.id}
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
                                    to={`/expense/${expense.id}`}
                                    className="text-decoration-none text-dark mx-2"
                                >
                                    {expense.name}
                                </Link>
                            </div>
                        </div>
                        <div>
                            {expense.amount > 0 ? (
                                <Button
                                    className="bg-success text-light"
                                    style={{ cursor: 'text' }}
                                >
                                    {expense.amount}
                                </Button>
                            ) : (
                                <Button
                                    className="bg-danger text-light"
                                    style={{ cursor: 'text' }}
                                >
                                    {expense.amount}
                                </Button>
                            )}
                            <Link
                                to={`/expense/${expense.id}`}
                                className="text-decoration-none mx-2"
                            >
                                View
                            </Link>
                            <Button className="bg-danger text-light mx-2">
                                <DeleteIcon />
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="my-5 row justify-content-center">
                {isVisibleAlert && (
                    <>
                        {addUserSuccess === 'true' ? (
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

                {isVisibleUserSelect && (
                    <Select
                        className="my-2"
                        options={options}
                        isMulti
                        closeMenuOnSelect={false}
                    />
                )}
                <Button
                    className="bg-primary text-light mx-2 px-3 my-2"
                    style={{ maxWidth: '250px' }}
                    onClick={handleAddUserButtonClick}
                >
                    <PersonAddIcon className="mx-2" /> Add Member
                </Button>
                {isVisibleCloseButton && (
                    <Button
                        className="bg-primary text-light mx-2 px-3 my-2"
                        style={{ maxWidth: '100px' }}
                        onClick={handleCloseAddUserButtonClick}
                    >
                        Close
                    </Button>
                )}
            </div>
        </div>
    )
}
export default GroupDetails
