import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'
import { cleanErrorMessage } from './helpers.js'

export const registerUser = createAsyncThunk(
    'auth/api/v2/create-users',
    async (userData, thunkAPI) => {
        try {
            return await authService.register(userData)
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data || error.message
            )
        }
    }
)
export const verifyOtp = createAsyncThunk(
    'auth/api/v2/verify-otp',
    async (otpData, thunkAPI) => {
        try {
            return await authService.verifyOtp(otpData)
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data || error.message
            )
        }
    }
)
export const loginUser = createAsyncThunk(
    'auth/api/v2/sign-in',
    authService.login
)

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user_email: null,
        token: null,
        refresh_token: null,
        status: 'idle',
        successMessage: null,
        errorMessage: null,
        isLoading: false,
        isLoggedIn: false,
    },
    reducers: {
        resetMessages: (state) => {
            state.successMessage = null
            state.errorMessage = null
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
                state.successMessage = null // Clear successMessage
                state.errorMessage = null // Clear errorMessage
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false
                state.errorMessage = action.payload || 'Failed to register user'
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.user_email = action.payload.successMessage
                    ? action.meta.arg.email
                    : null
                state.isLoading = false
                state.successMessage = action.payload.successMessage
                state.errorMessage = action.payload.errorMessage
                    ? cleanErrorMessage(action.payload.errorMessage)
                    : null
            })
            .addCase(verifyOtp.pending, (state) => {
                state.isLoading = true // Set loading state
                state.successMessage = null // Clear successMessage
                state.errorMessage = null // Clear errorMessage
            })
            .addCase(verifyOtp.rejected, (state, action) => {
                state.isLoading = false
                state.errorMessage = action.payload || 'Failed to register user'
            })
            .addCase(verifyOtp.fulfilled, (state, action) => {
                state.isLoading = false
                state.token = action.payload.access_token || null
                state.refresh_token = action.payload.refresh || null
                state.successMessage = action.payload.successMessage
                state.isLoggedIn = true
                state.errorMessage = action.payload.errorMessage
                    ? cleanErrorMessage(action.payload?.errorMessage)
                    : null
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.isLoggedIn = true
                state.token = action.payload.token || null
                state.successMessage = action.payload.successMessage
                state.errorMessage = cleanErrorMessage(
                    action.payload.errorMessage
                )
            })
    },
})

export const { resetMessages, logout } = authSlice.actions
export default authSlice.reducer
