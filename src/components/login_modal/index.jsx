import { Fade, Modal, TextField } from '@mui/material'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import PropTypes from 'prop-types'
import './style.css'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import logo from '../../assets/brand/brand-big.png'
import GoogleIcon from '@mui/icons-material/Google'
import FacebookIcon from '@mui/icons-material/Facebook'
import GitHubIcon from '@mui/icons-material/GitHub'

const LoginModal = (props) => {
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
                open={props.openLoginModal}
                onClose={props.handleCloseLoginModal}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={props.openLoginModal}>
                    <Box sx={style} className="loginModalBody">
                        <div className="d-flex flex-column mt-0">
                            <div className="text-center text-dark">
                                <img
                                    src={logo}
                                    className="brandImage"
                                    alt="logo"
                                />
                                <h6 className="mt-4 pb-1 ">
                                    Get access to your Orders, Wishlist and
                                    Recommendations
                                </h6>
                            </div>
                            <h6 className="mt-2 pb-1 text-dark text-center">
                                Sign in with:
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
                                Login to your account
                            </h6>

                            <TextField
                                className="my-1 inputBox"
                                variant="outlined"
                                placeholder="Email Address"
                                label="Email address"
                                id="form1"
                                type="email"
                            />
                            <TextField
                                className="my-1"
                                variant="outlined"
                                placeholder="Password"
                                label="Password"
                                id="form2"
                                type="password"
                            />

                            <div className="text-center pt-1 mb-2 pb-1">
                                <Button
                                    variant="contained"
                                    className="my-4 w-100"
                                >
                                    Sign in
                                </Button>
                                <a className="text-muted" href="#!">
                                    Forgot password?
                                </a>
                            </div>

                            <div className="d-flex flex-row align-items-center justify-content-center pb-4 my-2">
                                <p className="mb-0 text-dark">
                                    Don&apos;t have an account?
                                </p>
                                <Link to="/register">
                                    <Button variant="outlined" className="mx-2">
                                        Register
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
export default LoginModal
LoginModal.propTypes = {
    openLoginModal: PropTypes.bool,
    handleCloseLoginModal: PropTypes.func,
}
