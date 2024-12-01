import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import { Input, TextField } from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { Label } from '@mui/icons-material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo/index.js'
import DeleteIcon from '@mui/icons-material/Delete.js'

const ProfileDetails = () => {
    const friends = [
        { value: 'Test User 1', label: 'Test User 1' },
        { value: 'Test User 2', label: 'Test User 2' },
        { value: 'Test User 3', label: 'Test User 3' },
        { value: 'Test User 4', label: 'Test User 4' },
    ]
    return (
        <div>
            <h6 className="p-2 my-3 shadow text-center fw-bolder rounded-4">
                <Link to="/groups" className="text-decoration-none text-dark">
                    My Profile
                </Link>
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
                <div>
                    <Button
                        className="mx-2"
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        size="small"
                        style={{ maxWidth: '200px' }}
                        startIcon={<CloudUploadIcon />}
                    >
                        Upload
                        <Input
                            hidden
                            type="file"
                            onChange={(event) =>
                                console.log(event.target.files)
                            }
                            multiple
                        />
                    </Button>
                    <Button
                        className="mx-2"
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        size="small"
                        style={{ maxWidth: '200px' }}
                        startIcon={<CloudUploadIcon />}
                    >
                        Remove
                        <Input
                            hidden
                            type="file"
                            onChange={(event) =>
                                console.log(event.target.files)
                            }
                            multiple
                        />
                    </Button>
                </div>
            </div>
            <div className="my-2 p-2 p-2 shadow shadow-5 rounded-4">
                <h6 className="text-center">
                    <p className="text-dark">Account Details</p>
                </h6>

                <div className="row justify-content-center">
                    <div className="col-6">
                        <div>
                            <p>Name</p>
                            <TextField
                                id="outlined-basic"
                                label="Koushik Mallik"
                                variant="outlined"
                                className="mb-4"
                                size="small"
                            />
                            <p>Email</p>
                            <TextField
                                id="outlined-basic"
                                label="abcd@gmail.com"
                                variant="outlined"
                                type="email"
                                className="mb-4"
                                size="small"
                            />
                            <p>Date Of Birth</p>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    label="10/04/2003"
                                    className="mb-4"
                                    size="small"
                                />
                            </LocalizationProvider>
                            <p>Phone Number</p>
                            <TextField
                                id="outlined-basic"
                                label="+91 9876543210"
                                variant="outlined"
                                className="mb-4"
                                size="small"
                            />
                        </div>
                        <Button variant="contained" className="mb-3">
                            Save Details
                        </Button>
                    </div>
                </div>
            </div>
            <div className="my-2 p-2 p-2 shadow shadow-5 rounded-4">
                <h6 className="text-center">
                    <p className="text-dark">Friend Requests</p>
                </h6>

                <div className="row justify-content-center">
                    <div className="col-8">
                        <div className="list-group my-2">
                            {friends.map((friend) => (
                                <div
                                    key={friend.value}
                                    className="list-group-item border-0 d-flex justify-content-between align-items-center shadow mb-2"
                                >
                                    <div className="d-flex align-items-center">
                                        <img
                                            src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                            alt=""
                                            style={{
                                                width: '45px',
                                                height: '45px',
                                            }}
                                            className="rounded-circle ms-0"
                                        />
                                        <div className="ms-3">
                                            <p className="mb-1">
                                                {friend.label}
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <Button
                                            className="bg-primary text-light mx-1"
                                            size="small"
                                        >
                                            <DeleteIcon /> Accept Request
                                        </Button>
                                        <Button
                                            className="bg-danger text-light mx-1"
                                            size="small"
                                        >
                                            <DeleteIcon /> Remove Friend
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProfileDetails
