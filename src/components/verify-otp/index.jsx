import React, { useEffect, useState } from 'react'
import CustomMessage from '../common/custom_message/index.jsx'
import { TextField } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../common/loader/index.jsx'
import Button from '@mui/material/Button'
import { verifyOtp } from '../../store/userSlice.js'
import { useNavigate } from 'react-router-dom'

const VerifyOTPForm = () => {
    const { message, isLoading, user_email, token, statusCode } = useSelector(
        (state) => state.user
    )
    const [otp, setOtp] = useState(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleVerify = () => {
        dispatch(verifyOtp({ user_email, otp }))
    }
    useEffect(() => {
        if (token) {
            const timer = setTimeout(() => {
                navigate('/dashboard')
            }, 200)
            return () => clearTimeout(timer)
        }
    })
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6 justify-content-center">
                    <h3 className="text-center fw-bolder mt-2 mb-2">
                        Verify Email
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
                            message={
                                token
                                    ? 'Verification successful.'
                                    : message
                            }
                            statusCode={statusCode}
                        />
                        <div className="row justify-content-center">
                            <TextField
                                className="my-2"
                                variant="outlined"
                                placeholder="OTP"
                                label="OTP"
                                id="otp"
                                type="text"
                                style={{ maxWidth: '300px' }}
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                            />
                        </div>
                        <div className="d-flex justify-content-center">
                            {isLoading ? (
                                <Loader />
                            ) : (
                                <Button
                                    variant="contained"
                                    type="submit"
                                    className="my-4 btn-outline-primary"
                                    style={{ 'max-width': '25%' }}
                                    onClick={handleVerify}
                                    disabled={isLoading}
                                >
                                    {' '}
                                    Verify
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default VerifyOTPForm
