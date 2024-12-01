import { TextField } from '@mui/material'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import GoogleIcon from '@mui/icons-material/Google.js'
import FacebookIcon from '@mui/icons-material/Facebook.js'
import GitHubIcon from '@mui/icons-material/GitHub.js'

const RegisterForm = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6 justify-content-center">
                    <h3 className="text-center fw-bolder mt-2 mb-2">
                        Register{' '}
                    </h3>
                    <h6 className="text-center">
                        Experience the freedom of collaborative expense
                        management.
                    </h6>
                    <div
                        className="row justify-content-center"
                        style={{ marginTop: '30px' }}
                    >
                        <div className="row justify-content-center">
                            <TextField
                                className="my-2"
                                variant="outlined"
                                placeholder="Name"
                                label="Name"
                                id="name"
                                type="text"
                                style={{ maxWidth: '300px' }}
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
                            />
                        </div>

                        <Button
                            variant="contained"
                            type="submit"
                            className="my-4 btn-outline-primary"
                            style={{ 'max-width': '25%' }}
                        >
                            Sign up
                        </Button>
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
