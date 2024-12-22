import { TextField } from '@mui/material'
import Button from '@mui/material/Button'
import { Link, useNavigate } from 'react-router-dom'
import GoogleIcon from '@mui/icons-material/Google.js'
import FacebookIcon from '@mui/icons-material/Facebook.js'
import GitHubIcon from '@mui/icons-material/GitHub.js'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../../features/auth/authSlice.js'
import CustomMessage from '../common/custom_message/index.jsx'
import Loader from '../common/loader/index.jsx'

const RegisterForm = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const { successMessage, errorMessage, isLoading, user_email } = useSelector(
        (state) => state.auth
    )

    const handleRegister = () => {
        dispatch(registerUser({ name, email, password }))
    }
    useEffect(() => {
        if (successMessage && user_email) {
            alert('Moving you to the verification page in 3 seconds...')
            const timer = setTimeout(() => {
                navigate('/verify-otp')
            }, 3000)
            return () => clearTimeout(timer) // Cleanup timer on unmount
        }
    }, [successMessage, user_email])

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6 justify-content-center">
                    <h3 className="text-center fw-bolder mt-2 mb-2">
                        Register
                    </h3>
                    <h6 className="text-center">
                        Experience the freedom of collaborative expense
                        management.
                    </h6>
                    <div
                        className="row justify-content-center"
                        style={{ marginTop: '30px' }}
                    >
                        <CustomMessage
                            errorMessage={errorMessage}
                            successMessage={successMessage}
                        />

                        <div className="row justify-content-center">
                            <TextField
                                className="my-2"
                                variant="outlined"
                                placeholder="Name"
                                label="Name"
                                id="name"
                                type="text"
                                style={{ maxWidth: '300px' }}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="row justify-content-center">
                            <TextField
                                className="my-2"
                                variant="outlined"
                                placeholder="Email Address"
                                label="Email address"
                                id="form1"
                                type="email"
                                style={{ maxWidth: '300px' }}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="row justify-content-center">
                            <TextField
                                className="my-2"
                                variant="outlined"
                                placeholder="Password"
                                label="Password"
                                id="form2"
                                type="password"
                                style={{ maxWidth: '300px' }}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="d-flex justify-content-center">
                            {isLoading ? (
                                <Loader></Loader>
                            ) : (
                                <Button
                                    variant="contained"
                                    type="submit"
                                    className="my-4 btn-outline-primary"
                                    style={{ 'max-width': '25%' }}
                                    onClick={handleRegister}
                                    disabled={isLoading}
                                >
                                    {' '}
                                    Sign Up
                                </Button>
                            )}
                        </div>
                    </div>

                    <div className="text-center my-3">
                        <p>
                            Already a member? <Link to="/login">Login</Link>
                        </p>
                        <p>or sign up with:</p>

                        <Button
                            className="m-1"
                            style={{
                                backgroundColor: '#3b5998',
                                maxWidth: '0',
                            }}
                            href="#"
                        >
                            <FacebookIcon className="text-light" />
                        </Button>

                        <Button
                            className="m-1"
                            style={{
                                backgroundColor: '#dd4b39',
                                maxWidth: '0',
                            }}
                            href="#"
                        >
                            <GoogleIcon className="text-light" />
                        </Button>

                        <Button
                            className="m-1"
                            style={{
                                backgroundColor: '#ac2bac',
                                maxWidth: '0',
                            }}
                            href="#"
                        >
                            <GitHubIcon className="text-light" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RegisterForm
