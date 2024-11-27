import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'

const GroupDetails = () => {
    let expenses = [
        { id: 1, name: 'Test Expense 1', amount: 100 },
        { id: 2, name: 'Test Expense 2', amount: -200 },
        { id: 3, name: 'Test Expense 3', amount: 400 },
        { id: 4, name: 'Test Expense 4', amount: -7100 },
        { id: 5, name: 'Test Expense 5', amount: 3100 },
        { id: 6, name: 'Test Expense 6', amount: -9100 },
    ]
    return (
        <div>
            <h6 className="p-2 my-3 shadow text-center fw-bolder">
                <Link
                    to="/groups"
                    className="text-decoration-none text-primary"
                >
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
                                <p className="mb-1">{expense.name}</p>
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
                            <Button className="bg-danger text-light mx-2">
                                <DeleteIcon />
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default GroupDetails
