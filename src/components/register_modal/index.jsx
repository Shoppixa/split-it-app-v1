import { Fade, Modal, TextField } from '@mui/material'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import PropTypes from 'prop-types'
import './style.css'
import logo from '../../assets/brand/brand-big.png'
import Button from '@mui/material/Button'
import GoogleIcon from '@mui/icons-material/Google.js'
import FacebookIcon from '@mui/icons-material/Facebook.js'
import GitHubIcon from '@mui/icons-material/GitHub.js'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../common/loader'
import toast from 'react-hot-toast'
import { useState, useEffect } from 'react'
import CustomMessage from '../common/custom_message'
import { registerUser } from '../../store/userSlice'

const RegisterModal = ({ openRegisterModal, handleCloseRegisterModal }) => {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const { message, isLoading, user_email, statusCode } = useSelector((state) => state.user)

    const handleRegister = () => {
        try {
            dispatch(registerUser({ name, email, password }))
        } catch {
            console.log('error')
        }
    }

    useEffect(() => {
        if (message && user_email) {
            toast.success('Account Created Successfully')
            handleCloseRegisterModal()
            const timer = setTimeout(() => {
                navigate('/verify-otp')
            }, 200)
            return () => clearTimeout(timer) // Cleanup timer on unmount
        }
    }, [message, user_email])

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    }

    return (
        <div className="container">
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openRegisterModal}
                onClose={handleCloseRegisterModal}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={openRegisterModal}>
                    <Box sx={style} className="registerModalBody">
                        <div className="d-flex flex-column mt-0">
                            <div className="text-center text-dark">
                                <img src={logo} className="brandImage" alt="logo" />
                                <h6 className="mt-4 pb-1 ">
                                    Say goodbye to the complexities of splitting bills.
                                </h6>
                            </div>
                            <h6 className="mt-2 pb-1 text-dark text-center">Sign up with:</h6>
                            <div className="row d-flex justify-content-center">
                                <CustomMessage message={message} statusCode={statusCode} />
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
                                        backgroundColor: '#ac2bac',
                                        maxWidth: '0',
                                    }}
                                    href="#"
                                >
                                    <GitHubIcon className="text-light" />
                                </Button>
                            </div>
                            <h6 className="text-dark mt-4">Register your account</h6>

                            <TextField
                                className="my-1 inputBox"
                                variant="outlined"
                                placeholder="Name"
                                label="Name"
                                id="form1"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <TextField
                                className="my-1 inputBox"
                                variant="outlined"
                                placeholder="Email Address"
                                label="Email address"
                                id="form2"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <TextField
                                className="my-1"
                                variant="outlined"
                                placeholder="Password"
                                label="Password"
                                id="form3"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <div className="text-center pt-1 mb-2 pb-1">
                                {isLoading ? (
                                    <Loader></Loader>
                                ) : (
                                    <Button
                                        variant="contained"
                                        className="my-4 w-100"
                                        onClick={handleRegister}
                                        disabled={isLoading}
                                    >
                                        Sign Up
                                    </Button>
                                )}
                            </div>

                            <div className="d-flex flex-row align-items-center justify-content-center pb-4 my-2">
                                <p className="mb-0 text-dark">Already have an account?</p>
                                <Link to="/login">
                                    <Button variant="outlined" className="mx-2">
                                        Login
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </div>
    )
}
export default RegisterModal
RegisterModal.propTypes = {
    openRegisterModal: PropTypes.bool,
    handleCloseRegisterModal: PropTypes.func,
}
