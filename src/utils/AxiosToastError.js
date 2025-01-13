// import toast from "react-hot-toast"

export const AxiosToastError = (error) => {
    if (error.response) {
        // If the error has a response from the backend
        // toast.error('An error occurred')
        return { message: error.response.data.message || 'An error occurred' };
    } else if (error.request) {
        // toast.error('No response from the server. Please try again.')
        return { message: 'No response from the server' };
    } else {
        // For other errors (e.g., network issues, invalid configuration)
        // toast.error('An unknown error occurred')
        return { message: error.message || 'Something went wrong' };
    }
}
