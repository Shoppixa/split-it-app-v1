import React, { useEffect } from 'react'
import logo from '../../assets/brand/brand-big.png'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import VerifyOTPForm from '../../components/verify-otp/index.jsx'

const VerifyOTP = () => {
    const { user_email } = useSelector((state) => state.auth)
    const navigate = useNavigate()

    useEffect(() => {
        if (!user_email) {
            navigate('/register')
        }
    })
    return (
        <div className="container">
            <div className="text-center my-2">
                <img
                    src={logo}
                    alt="my_logo"
                    className="img-fluid mt-5 mb-5"
                    style={{ maxHeight: '200px' }}
                />
                <VerifyOTPForm />
            </div>
        </div>
    )
}
export default VerifyOTP
