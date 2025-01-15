import React, { useState } from 'react'
import { Box, Button, TextField, Typography, Container, Paper, Avatar, Stack } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import DeleteIcon from '@mui/icons-material/Delete'
import dayjs from 'dayjs'
import { useSelector } from 'react-redux'

const ProfileDetails = () => {
    const { userDetails } = useSelector((state) => state.user)
    const [name, setName] = useState(userDetails.fname + ' ' + userDetails.lname)
    const [email, setEmail] = useState(userDetails.email)
    const [phNumber, setPhNumber] = useState(userDetails.phone)

    return (
        <Container maxWidth="lg">
            <Box sx={{ my: 1.5 }}>
                {/* Profile Header */}
                <Paper
                    elevation={3}
                    sx={{
                        p: 1.5,
                        mb: 2,
                        borderRadius: 2,
                        textAlign: 'center',
                    }}>
                    <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
                        My Profile
                    </Typography>
                </Paper>

                {/* Account Details Section */}
                <Paper
                    elevation={3}
                    sx={{
                        p: { xs: 2, sm: 2.5 },
                        mb: 2,
                        borderRadius: 2,
                    }}>
                    <Typography variant="h6" sx={{ mb: 2, textAlign: 'center' }}>
                        Account Details
                    </Typography>

                    <Box
                        component="form"
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', sm: 'row' },
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 1,
                            maxWidth: '100%',
                            width: '100%',
                            mx: 'auto',
                            mb: 2,
                        }}>
                        <Avatar
                            src={
                                userDetails.image ||
                                'https://mdbootstrap.com/img/new/avatars/15.jpg'
                            }
                            sx={{ width: 80, height: 80 }}
                        />
                        <Box
                            sx={{
                                display: 'flex',
                                gap: 1,
                                flexDirection: { xs: 'column', sm: 'row' },
                                width: { xs: '100%', sm: 'auto' },
                            }}>
                            <Button
                                variant="contained"
                                sx={{ height: 36 }}
                                startIcon={<CloudUploadIcon />}
                                component="label"
                                size="small"
                                fullWidth>
                                Upload
                                <input
                                    hidden
                                    type="file"
                                    onChange={(event) => console.log(event.target.files)}
                                />
                            </Button>

                            <Button
                                sx={{
                                    height: 36,
                                }}
                                variant="contained"
                                startIcon={<DeleteIcon />}
                                size="small"
                                fullWidth>
                                Remove
                            </Button>
                        </Box>
                    </Box>

                    <Box
                        component="form"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%',
                            maxWidth: { xs: '100%', sm: '500px' },
                            mx: 'auto',
                            '& .MuiTextField-root': { mb: 2 },
                        }}>
                        {/* First row with Name and Email */}
                        <Box
                            sx={{
                                display: 'flex',
                                gap: 2,
                                flexDirection: { xs: 'column', sm: 'row' },
                            }}>
                            <Box sx={{ flex: 1 }}>
                                <Typography variant="body1" sx={{ mb: 0.5 }}>
                                    Name
                                </Typography>
                                <TextField fullWidth size="small" value={name} />
                            </Box>
                            <Box sx={{ flex: 1 }}>
                                <Typography variant="body1" sx={{ mb: 0.5 }}>
                                    Email
                                </Typography>
                                <TextField fullWidth size="small" type="email" value={email} />
                            </Box>
                        </Box>

                        {/* Second row with Date of Birth and Phone Number */}
                        <Box
                            sx={{
                                display: 'flex',
                                gap: 2,
                                flexDirection: { xs: 'column', sm: 'row' },
                                mt: 1,
                            }}>
                            <Box sx={{ flex: 1 }}>
                                <Typography variant="body1" sx={{ mb: 0.5 }}>
                                    Date of Birth
                                </Typography>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        defaultValue={dayjs(new Date())}
                                        slotProps={{
                                            textField: {
                                                size: 'small',
                                                fullWidth: true,
                                            },
                                        }}
                                    />
                                </LocalizationProvider>
                            </Box>
                            <Box sx={{ flex: 1 }}>
                                <Typography variant="body1" sx={{ mb: 0.5 }}>
                                    Phone Number
                                </Typography>
                                <TextField fullWidth size="small" value={phNumber || ''} />
                            </Box>
                        </Box>

                        <Button
                            variant="contained"
                            sx={{
                                mt: 3,
                                width: { xs: '100%', sm: 'auto' },
                                alignSelf: { sm: 'flex-end' },
                            }}>
                            Save Details
                        </Button>
                    </Box>
                </Paper>
            </Box>
        </Container>
    )
}

export default ProfileDetails
