import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'
import { Alert, Chip, Stack, TextField } from '@mui/material'
import Select from 'react-select'
import PersonAddIcon from '@mui/icons-material/PersonAdd.js'
import getRandomString from '../../utils/get_random_string.jsx'

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
    const members = [
        { value: 'Test User 1', label: 'Test User 1' },
        { value: 'Test User 2', label: 'Test User 2' },
        { value: 'Test User 3', label: 'Test User 3' },
        { value: 'Test User 4', label: 'Test User 4' },
    ]
    const expenseTypeOptions = [
        { value: 'Test Category 1', label: 'Test Category 1' },
        { value: 'Test Category 2', label: 'Test Category 2' },
        { value: 'Test Category 3', label: 'Test Category 3' },
        { value: 'Test Category 4', label: 'Test Category 4' },
    ]
    const [isVisibleUserSelect, setIsVisibleUserSelect] = useState(false) // Default: Hidden
    const [isVisibleAddExpense, setIsVisibleAddExpense] = useState(false) // Default: Hidden
    const [isVisibleAlert, setIsVisibleAlert] = useState(false) // Default: Hidden
    const [isVisibleCloseButton, setIsVisibleCloseButton] = useState(false) // Default: Hidden
    const [isVisibleAddExpenseCloseButton, setIsVisibleAddExpenseCloseButton] =
        useState(false) // Default: Hidden
    const [addUserSuccess, setAddUserSuccess] = useState(null)
    const [addExpenseSuccess, setAddExpenseSuccess] = useState(null)

    const handleAddUserButtonClick = (e) => {
        e.preventDefault()
        handleCloseAddExpenseButtonClick()
        isVisibleUserSelect
            ? (setIsVisibleAlert(true),
              setAddUserSuccess(getRandomString('true', 'false')))
            : (setIsVisibleUserSelect(true), setIsVisibleCloseButton(true)) // Show the component
    }
    const handleCloseAlertButton = () => {
        setIsVisibleAlert(false) // Show the component
        setAddUserSuccess(null)
        setAddExpenseSuccess(null)
    }
    const handleCloseAddUserButtonClick = () => {
        setIsVisibleAlert(false)
        setIsVisibleUserSelect(false)
        setIsVisibleCloseButton(false) // Show the component
        setAddUserSuccess(null)
    }
    const handleCloseAddExpenseButtonClick = () => {
        setIsVisibleAlert(false)
        setIsVisibleAddExpense(false)
        setIsVisibleAddExpenseCloseButton(false) // Show the component
        setAddExpenseSuccess(null)
    }

    const handleAddExpenseButtonClick = (e) => {
        e.preventDefault()
        handleCloseAddUserButtonClick()
        isVisibleAddExpense
            ? (setIsVisibleAlert(true),
              setAddExpenseSuccess(getRandomString('true', 'false')))
            : (setIsVisibleAddExpense(true),
              setIsVisibleAddExpenseCloseButton(true)) // Show the component
    }
    return (
        <div>
            <h6 className="p-2 my-3 shadow text-center fw-bolder">
                <Link to="/groups" className="text-decoration-none text-dark">
                    Test Group 1
                </Link>
            </h6>
            <Stack
                direction="row"
                spacing={1}
                className="justify-content-center"
            >
                <Chip
                    label="Rs. 2384.45"
                    color="success"
                    className="shadow shadow-5"
                />
                <Chip
                    label="Rs. 3453.34"
                    color="warning"
                    className="shadow shadow-5"
                />
            </Stack>

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
                        ) : null}
                        {addUserSuccess === 'false' ? (
                            <Alert
                                className="my-2"
                                severity="error"
                                onClose={handleCloseAlertButton}
                                style={{ maxWidth: '800px' }}
                            >
                                Could not add participants to the group.
                            </Alert>
                        ) : null}
                        {addExpenseSuccess === 'true' ? (
                            <Alert
                                className=" my-2"
                                severity="success"
                                onClose={handleCloseAlertButton}
                                style={{ maxWidth: '800px' }}
                            >
                                New Group added successfully.
                            </Alert>
                        ) : null}
                        {addExpenseSuccess === 'false' ? (
                            <Alert
                                className="my-2"
                                severity="error"
                                onClose={handleCloseAlertButton}
                                style={{ maxWidth: '800px' }}
                            >
                                Could not add Group to the group.
                            </Alert>
                        ) : null}
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
                {isVisibleAddExpense && (
                    <div>
                        <TextField
                            fullWidth
                            color="primary"
                            id="outlined-basic"
                            label="Expense Label"
                            variant="outlined"
                        />
                        <Select
                            className="my-2"
                            options={expenseTypeOptions}
                            isMulti
                            closeMenuOnSelect={false}
                        />
                    </div>
                )}

                <Button
                    className="bg-primary text-light mx-2 px-3 my-2"
                    style={{ maxWidth: '250px' }}
                    onClick={handleAddUserButtonClick}
                >
                    <PersonAddIcon className="mx-2" /> Add Member
                </Button>
                <Button
                    className="bg-primary text-light mx-2 px-3 my-2"
                    style={{ maxWidth: '250px' }}
                    onClick={handleAddExpenseButtonClick}
                >
                    <PersonAddIcon className="mx-2" /> Add Expense
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
                {isVisibleAddExpenseCloseButton && (
                    <Button
                        className="bg-primary text-light mx-2 px-3 my-2"
                        style={{ maxWidth: '100px' }}
                        onClick={handleCloseAddExpenseButtonClick}
                    >
                        Close
                    </Button>
                )}
            </div>

            <div className="list-group shadow-5-strong my-2">
                {members.map((member) => (
                    <div
                        key={member.value}
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
                                    to={`/user/${member.value}`}
                                    className="text-decoration-none text-dark mx-2"
                                >
                                    {member.label}
                                </Link>
                            </div>
                        </div>
                        <Button
                            className="bg-danger text-light mx-2"
                            size="small"
                        >
                            <DeleteIcon /> Remove User
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default GroupDetails
