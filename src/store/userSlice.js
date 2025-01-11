import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import SummaryApi from '../common/SummaryApi.js'
import Axios from '../utils/Axios.js'
import { cleanErrorMessage } from '../utils/helpers.js'
import { AxiosToastError } from '../utils/AxiosToastError.js'

export const registerUser = createAsyncThunk(
    'registerUser',
    async (userData, thunkAPI) => {
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
            });
            return { message: response.data.message };
        } catch (error) {
            const errorPayload = AxiosToastError(error);
            return thunkAPI.rejectWithValue({ message: cleanErrorMessage(errorPayload.message) });
        }
    }
)
export const verifyOtp = createAsyncThunk(
    'verifyOtp',
    async ({ user_email, otp }) => {
        try {
            let otpData = {
                email: user_email,
                otp: otp,
            }
            const response = await Axios(
                {
                    ...SummaryApi.verify_otp,
                    data: otpData
                }
            )
            return {
                access_token: response.data.token?.access,
                refresh: response.data.token?.refresh,
                message: response.data.message,
            }
        } catch (error) {
            return AxiosToastError(error)
        }
    }
)
export const loginUser = createAsyncThunk(
    'login',
    async (userData) => {
        try {
            const response = await Axios({
                ...SummaryApi.login,
                data: userData,
            })
            return {
                message: response.data.message,
                token: response.data.token, // Include token if login is successful
            }
        } catch (error) {
            return AxiosToastError(error)
        }
    }
)

const initialValue = {
    user_email: null,
    token: null,
    refresh_token: null,
    status: 'idle',
    message: null,
    isLoading: false,
    isLoggedIn: false,
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
            state.user = null
            state.token = null
            state.refresh_token = null
            state.isLoading = false
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
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.user_email = action.payload.message
                    ? action.meta.arg.email
                    : null
                state.isLoading = false
                state.message = action.payload.message
                state.message = action.payload.message
                    ? cleanErrorMessage(action.payload.message)
                    : null
            })
            .addCase(verifyOtp.pending, (state) => {
                state.isLoading = true // Set loading state
                state.message = null // Clear message
            })
            .addCase(verifyOtp.rejected, (state, action) => {
                state.isLoading = false
                state.message = action.payload.message || 'Failed to register user'
            })
            .addCase(verifyOtp.fulfilled, (state, action) => {
                state.isLoading = false
                state.token = action.payload.access_token || null
                state.refresh_token = action.payload.refresh || null
                state.message = action.payload.message
                state.isLoggedIn = true
                state.message = action.payload.message
                    ? cleanErrorMessage(action.payload?.message)
                    : null
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.isLoggedIn = true
                state.token = action.payload.token || null
                state.message = action.payload.message
                state.message = cleanErrorMessage(
                    action.payload.message
                )
            })
    },
})

export const { resetMessages, logout } = userSlice.actions
export default userSlice.reducer
