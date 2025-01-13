import { TextField } from '@mui/material'
import Button from '@mui/material/Button'
import { Link, useNavigate } from 'react-router-dom'
import GoogleIcon from '@mui/icons-material/Google.js'
import FacebookIcon from '@mui/icons-material/Facebook.js'
import GitHubIcon from '@mui/icons-material/GitHub.js'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../../store/userSlice'
import CustomMessage from '../common/custom_message'
import toast from 'react-hot-toast'

const LoginForm = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const { message, isLoading, token, statusCode } = useSelector((state) => state.user)

    const handleLogin = () => {
        try {
            dispatch(loginUser({ email, password }))
        } catch {
            console.log('error')
        }
    }

    useEffect(() => {
        if (token) {
            toast.success(message || 'Login Successful')
            const timer = setTimeout(() => {
                navigate('/dashboard')
            }, 200)
            return () => clearTimeout(timer) // Cleanup timer on unmount
        }
    }, [token])

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6 justify-content-center">
                    <h3 className="text-center fw-bolder mt-2 mb-2">Login </h3>
                    <h6 className="text-center">
                        Experience the freedom of collaborative expense management.
                    </h6>
                    <CustomMessage message={message} statusCode={statusCode} />
                    <div className="row justify-content-center" style={{ marginTop: '30px' }}>
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

                        <Button
                            variant="contained"
                            type="submit"
                            className="my-4 btn-outline-primary"
                            style={{ maxWidth: '25%' }}
                            onClick={handleLogin}
                            disabled={isLoading}
                        >
                            Sign in
                        </Button>
                    </div>

                    <div className="text-center my-3">
                        <p>
                            Not a member? <Link to="/register">Register</Link>
                        </p>
                        <p>or sign in with:</p>

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
export default LoginForm
