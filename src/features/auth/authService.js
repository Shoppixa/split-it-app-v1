import axios from 'axios'

const API_URL = import.meta.env.VITE_BACKEND_API_URL

const handleErrors = (error) => {
    if (error.response) {
        // If the error has a response from the backend
        return {
            successMessage: null,
            errorMessage:
                error.response.data.errorMessage || 'An error occurred',
        }
    } else if (error.request) {
        // If no response was received from the backend
        return {
            successMessage: null,
            errorMessage: 'No response from the server. Please try again.',
        }
    } else {
        // For other errors (e.g., network issues, invalid configuration)
        return {
            successMessage: null,
            errorMessage: error.message || 'An unknown error occurred',
        }
    }
}

const register = async (userData) => {
    userData = {
        fname: userData['name'].split(' ')[0],
        lname: userData['name'].split(' ')[1],
        email: userData['email'],
        password1: userData['password'],
        password2: userData['password'],
    }
    try {
        const response = await axios.post(
            `${API_URL}/auth/api/v2/create-users`,
            userData
        )
        return {
            successMessage: response.data.successMessage,
            errorMessage: null,
        }
    } catch (error) {
        return handleErrors(error)
    }
}

const verifyOtp = async (otpData) => {
    try {
        otpData = {
            email: otpData['user_email'],
            otp: otpData['otp'],
        }
        const response = await axios.post(
            `${API_URL}/auth/api/v2/verify-otp`,
            otpData
        )
        return {
            access_token: response.data.token?.access,
            refresh: response.data.token?.refresh,
            successMessage: response.data.successMessage,
            errorMessage: null,
        }
    } catch (error) {
        return handleErrors(error)
    }
}

const login = async (userData) => {
    try {
        const response = await axios.post(
            `${API_URL}/auth/api/v2/sign-in`,
            userData
        )
        return {
            successMessage: response.data.successMessage,
            errorMessage: null,
            token: response.data.token, // Include token if login is successful
        }
    } catch (error) {
        return handleErrors(error)
    }
}

const authService = {
    register,
    verifyOtp,
    login,
}

export default authService
