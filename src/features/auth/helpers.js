export function cleanErrorMessage(errorMessage) {
    const prefixes = [
        'SerializerValidationError: ',
        'OTPNotVerifiedError:',
        'ValueError:',
        'UserAlreadyVerifiedError: ',
    ]
    // Iterate through the list of prefixes
    for (const prefix of prefixes) {
        // Check if the error message starts with the current prefix
        if (errorMessage.startsWith(prefix)) {
            return errorMessage.slice(prefix.length) // Remove the prefix
        }
    }
    return errorMessage // Return the original message if no prefix matches
}
