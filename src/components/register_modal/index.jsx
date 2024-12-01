import { Fade, Modal, TextField } from '@mui/material'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'
import './style.css'
import logo from '../../assets/brand/brand-big.png'
import Button from '@mui/material/Button'
import GoogleIcon from '@mui/icons-material/Google.js'
import FacebookIcon from '@mui/icons-material/Facebook.js'
import GitHubIcon from '@mui/icons-material/GitHub.js'
import { Link } from 'react-router-dom'

const RegisterModal = (props) => {
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
                open={props.openRegisterModal}
                onClose={props.handleCloseRegisterModal}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={props.openRegisterModal}>
                    <Box sx={style} className="registerModalBody">
                        <div className="d-flex flex-column mt-0">
                            <div className="text-center text-dark">
                                <img
                                    src={logo}
                                    className="brandImage"
                                    alt="logo"
                                />
                                <h6 className="mt-4 pb-1 ">
                                    Say goodbye to the complexities of splitting
                                    bills.
                                </h6>
                            </div>
                            <h6 className="mt-2 pb-1 text-dark text-center">
                                Sign up with:
                            </h6>
                            <div className="row d-flex justify-content-center">
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
                            <h6 className="text-dark mt-4">
                                Register your account
                            </h6>

                            <TextField
                                className="my-1 inputBox"
                                variant="outlined"
                                placeholder="Name"
                                label="Name"
                                id="form1"
                                type="text"
                            />
                            <TextField
                                className="my-1 inputBox"
                                variant="outlined"
                                placeholder="Email Address"
                                label="Email address"
                                id="form2"
                                type="email"
                            />
                            <TextField
                                className="my-1"
                                variant="outlined"
                                placeholder="Password"
                                label="Password"
                                id="form3"
                                type="password"
                            />

                            <div className="text-center pt-1 mb-2 pb-1">
                                <Button
                                    variant="contained"
                                    className="my-4 w-100"
                                >
                                    Sign Up
                                </Button>
                            </div>

                            <div className="d-flex flex-row align-items-center justify-content-center pb-4 my-2">
                                <p className="mb-0 text-dark">
                                    Already have an account?
                                </p>
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
