import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import SummaryApi from '../common/SummaryApi.js'
import Axios from '../utils/Axios.js'
import { cleanErrorMessage } from '../utils/clearErrorMessage.js'
import { AxiosToastError } from '../utils/AxiosToastError.js'
import toast from 'react-hot-toast'

export const registerUser = createAsyncThunk('registerUser', async (userData, thunkAPI) => {
    const payload = {
        fname: userData['name'].split(' ')[0],
        lname: userData['name'].split(' ')[1],
        email: userData['email'],
        password: userData['password'],
    }
    try {
        const response = await Axios({
            ...SummaryApi.register,
            data: payload,
        })
        return {
            message: response.data.message,
            statusCode: response.status,
            token: response.data.token?.access,
            refresh: response.data.token?.refresh,
        }
    } catch (error) {
        const errorPayload = AxiosToastError(error)
        return thunkAPI.rejectWithValue({
            message: cleanErrorMessage(errorPayload.message),
            statusCode: error.status,
        })
    }
})
export const verifyOtp = createAsyncThunk('verifyOtp', async ({ user_email, otp }, thunkAPI) => {
    try {
        let otpData = {
            email: user_email,
            otp: otp,
        }
        const response = await Axios({
            ...SummaryApi.verify_otp,
            data: otpData,
        })
        return {
            access_token: response.data.token?.access,
            refresh: response.data.token?.refresh,
            message: response.data.message,
            statusCode: response.status,
        }
    } catch (error) {
        const errorPayload = AxiosToastError(error)
        return thunkAPI.rejectWithValue({
            message: cleanErrorMessage(errorPayload.message),
            statusCode: error.status,
        })
    }
})
export const loginUser = createAsyncThunk('login', async (userData, thunkAPI) => {
    try {
        const response = await Axios({
            ...SummaryApi.login,
            data: userData,
        })
        return {
            message: response.data.message,
            token: response.data.token?.access,
            refresh: response.data.token?.refresh,
            statusCode: response.status, // Include token if login is successful
        }
    } catch (error) {
        const errorPayload = AxiosToastError(error)
        return thunkAPI.rejectWithValue({
            message: cleanErrorMessage(errorPayload.message),
            statusCode: error.status,
        })
    }
})

export const userDetailsbyID = createAsyncThunk('userDetailsID', async (userData, thunkAPI) => {
    console.log('User Details by ID called')

    try {
        const response = await Axios({
            ...SummaryApi.getUserByID,
        })
        return {
            message: response.data.message,
            statusCode: response.status,
            userDetails: response.data.data,
        }
    } catch (error) {
        const errorPayload = AxiosToastError(error)
        return thunkAPI.rejectWithValue({
            message: cleanErrorMessage(errorPayload.message),
            statusCode: error.status,
        })
    }
})

const initialValue = {
    user_email: null,
    token: null,
    refresh_token: null,
    status: 'idle',
    message: null,
    isLoading: false,
    isLoggedIn: false,
    statusCode: '',
    userDetails: {},
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialValue,
    reducers: {
        resetMessages: (state) => {
            state.message = null
            state.isLoading = false
        },
        logout: (state) => {
            state.user_email = null
            state.token = null
            ;(state.refresh_token = null), (state.isLoggedIn = false), (state.isLoading = false)
            state.isLoggedIn = false
            toast.success('Logged out successfully')
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true // Set loading state
                state.message = null // Clear message
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false
                state.message = action.payload?.message || 'Failed to register user'
                state.statusCode = action.payload?.statusCode
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.user_email = action.payload.message ? action.meta.arg.email : null
                state.isLoading = false
                state.message = action.payload.message
                    ? cleanErrorMessage(action.payload.message)
                    : null
                state.statusCode = action.payload.statusCode
                localStorage.setItem('accessToken', action.payload.token)
                toast.success(action.payload.message || 'Account Created Successfully')
            })
            .addCase(verifyOtp.pending, (state) => {
                state.isLoading = true // Set loading state
                state.message = null // Clear message
            })
            .addCase(verifyOtp.rejected, (state, action) => {
                state.isLoading = false
                state.message = action.payload.message || 'Failed to register user'
                state.statusCode = action.payload.statusCode
            })
            .addCase(verifyOtp.fulfilled, (state, action) => {
                state.isLoading = false
                state.token = action.payload.token || null
                localStorage.setItem('accessToken', action.payload.token)
                state.refresh_token = action.payload.refresh || null
                state.message = action.payload.message
                state.isLoggedIn = true
                state.message = action.payload.message
                    ? cleanErrorMessage(action.payload?.message)
                    : null
                state.statusCode = action.payload.statusCode
                toast.success(action.payload.message || 'Login Successful')
            })
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true // Set loading state
                state.message = null // Clear message
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false
                state.message = action.payload?.message || 'Failed to register user'
                state.statusCode = action.payload?.statusCode
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.isLoggedIn = true
                state.token = action.payload.token || null
                localStorage.setItem('accessToken', action.payload.token)
                state.message = action.payload.message
                state.statusCode = action.payload.statusCode
                toast.success(action.payload.message || 'Login Successful')
            })
            .addCase(userDetailsbyID.pending, (state) => {
                state.isLoading = true // Set loading state
                state.message = null // Clear message
            })
            .addCase(userDetailsbyID.rejected, (state, action) => {
                state.isLoading = false
                state.message = action.payload?.message || 'Error fetching user details'
                state.statusCode = action.payload?.statusCode
            })
            .addCase(userDetailsbyID.fulfilled, (state, action) => {
                state.isLoading = false
                state.isLoggedIn = true
                state.message = action.payload.message
                state.statusCode = action.payload.statusCode
                state.userDetails = action.payload.userDetails
                toast.success(action.payload.message || 'User Details Fetched Successful')
            })
    },
})

export const { resetMessages, logout } = userSlice.actions
export default userSlice.reducer
