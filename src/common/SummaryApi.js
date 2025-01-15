export const baseURL = import.meta.env.VITE_BACKEND_API_URL || 'http://localhost:8080/'

const SummaryApi = {
    register: {
        url: '/auth/api/v2/create-users',
        method: 'post',
    },
    login: {
        url: '/auth/api/v2/sign-in',
        method: 'post',
    },
    forgot_password: {
        url: 'auth/api/user/forgot-password',
        method: 'put',
    },
    verify_otp: {
        url: '/auth/api/v2/verify-otp',
        method: 'post',
    },
    updatePassword: {
        url: '/api/user/update-password',
        method: 'put',
    },
    refreshToken: {
        url: 'api/user/refresh-token',
        method: 'post',
    },
    friendSearch: {
        url: 'auth/api/v2/all-users',
        method: 'get',
    },
    logout: {
        url: '/api/user/logout',
        method: 'get',
    },
    getUserByID: {
        url: '/auth/api/v2/user-details',
        method: 'get',
    },
}

export default SummaryApi
