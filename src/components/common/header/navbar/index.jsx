import * as React from 'react'

import LoginModal from '../../../login_modal/index.jsx'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import MenuItem from '@mui/material/MenuItem'
import Drawer from '@mui/material/Drawer'
import MenuIcon from '@mui/icons-material/Menu'
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong'
import './style.css'
import Box from '@mui/material/Box'
import RegisterModal from '../../../register_modal/index.jsx'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { persistor } from '../../../../store/store.js'
import toast from 'react-hot-toast'
import { logout } from '../../../../store/userSlice.js'

const logoStyle = {
    height: 'auto',
    cursor: 'pointer',
}

function AppNavbar() {
    const { isLoggedIn } = useSelector((state) => state.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const logged_in_pages = [
        { url: 'dashboard', name: 'Dashboard' },
        { url: 'profile', name: 'Profile' },
        { url: 'friends', name: 'Friends' },
        { url: 'groups', name: 'Groups' },
        { url: 'features', name: 'Features' },
        { url: 'pricing', name: 'Pricing' },
        { url: 'faq', name: 'FAQ' },
    ]
    const logged_out_pages = [
        { url: 'features', name: 'Features' },
        { url: 'pricing', name: 'Pricing' },
        { url: 'faq', name: 'FAQ' },
    ]
    const pages = isLoggedIn ? logged_in_pages : logged_out_pages

    const [open, setOpen] = React.useState(false)
    const [openLoginModal, setOpenLoginModal] = React.useState(false)
    const [openReisterModal, setOpenResigterModal] = React.useState(false)
    const handleOpenLoginModal = () => setOpenLoginModal(true)
    const handleCloseLoginModal = () => setOpenLoginModal(false)
    const handleOpenRegisterModal = () => setOpenResigterModal(true)
    const handleCloseRegisterModal = () => setOpenResigterModal(false)

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen)
    }

    const handleLogout = async () => {
        dispatch(logout());
        await persistor.purge();
        toast.success('Logged out successfully');
        const timer = setTimeout(() => {
            navigate('/');
        }, 200);
        return () => clearTimeout(timer);
    };

    return (
        <>
            <div>
                <AppBar
                    className="border border-"
                    position="sticky"
                    sx={{
                        boxShadow: 0,
                        bgcolor: 'transparent',
                        backgroundImage: 'none',
                    }}
                >
                    <Toolbar
                        variant="regular"
                        sx={() => ({
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flexShrink: 0,
                            maxHeight: 40,
                            border: '1px solid',
                            borderColor: 'divider',
                        })}
                    >
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: 'flex',
                                alignItems: 'center',
                                ml: '-18px',
                                px: 0,
                            }}
                        >
                            <Link
                                to="/"
                                className="d-flex logoLink align-items-center"
                            >
                                <ReceiptLongIcon
                                    className="logo"
                                    fontSize={'large'}
                                />
                                <h4 className="logoText" style={logoStyle}>
                                    {import.meta.env.VITE_APP_TITLE ||
                                        'ECOM App'}
                                </h4>
                            </Link>
                            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                {pages.map((page) => (
                                    <MenuItem
                                        key={pages.indexOf(page)}
                                        sx={{ py: '6px', px: '12px' }}
                                    >
                                        <Typography
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            <Link
                                                to={page.url}
                                                className="text-decoration-none text-dark"
                                            >
                                                {page.name}
                                            </Link>
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Box>
                        </Box>
                        <Box
                            className="loginButtonsBox"
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                gap: 0.5,
                                alignItems: 'center',
                            }}
                        >
                            {isLoggedIn ? (
                                <>
                                    <Button
                                        color="primary"
                                        variant="contained"
                                        size="small"
                                        component="a"
                                        target="_blank"
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <Button
                                        color="primary"
                                        variant="text"
                                        size="small"
                                        component="a"
                                        target="_blank"
                                        onClick={handleOpenLoginModal}
                                    >
                                        Sign in
                                    </Button>
                                    <Button
                                        color="primary"
                                        variant="contained"
                                        size="small"
                                        component="a"
                                        target="_blank"
                                        onClick={handleOpenRegisterModal}
                                    >
                                        Sign up
                                    </Button>
                                </>
                            )}
                        </Box>
                        <Box sx={{ display: { sm: '', md: 'none' } }}>
                            <Button
                                variant="text"
                                color="primary"
                                aria-label="menu"
                                onClick={toggleDrawer(true)}
                                sx={{ minWidth: '30px', p: '4px' }}
                            >
                                <MenuIcon />
                            </Button>
                            <Drawer
                                anchor="right"
                                open={open}
                                onClose={toggleDrawer(false)}
                            >
                                <Box
                                    sx={{
                                        minWidth: '60dvw',
                                        p: 2,
                                        backgroundColor: 'background.paper',
                                        flexGrow: 1,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'end',
                                            flexGrow: 1,
                                        }}
                                    ></Box>
                                    {pages.map((page, index) => (
                                        <MenuItem key={index}>
                                            {page.name}
                                        </MenuItem>
                                    )
                                    )}
                                    <Divider />
                                    {isLoggedIn ? (
                                        <>
                                            <MenuItem>
                                                <Button
                                                    color="primary"
                                                    variant="contained"
                                                    component="a"
                                                    target="_blank"
                                                    sx={{ width: '100%' }}
                                                    onClick={handleLogout}
                                                >
                                                    Logout
                                                </Button>
                                            </MenuItem>
                                        </>
                                    ) : (
                                        <>
                                            <MenuItem>
                                                <Button
                                                    color="primary"
                                                    variant="outlined"
                                                    component="a"
                                                    target="_blank"
                                                    sx={{ width: '100%' }}
                                                    onClick={
                                                        handleOpenLoginModal
                                                    }
                                                >
                                                    Sign in
                                                </Button>
                                            </MenuItem>
                                            <MenuItem>
                                                <Button
                                                    color="primary"
                                                    variant="contained"
                                                    component="a"
                                                    target="_blank"
                                                    sx={{ width: '100%' }}
                                                    onClick={
                                                        handleOpenRegisterModal
                                                    }
                                                >
                                                    Sign up
                                                </Button>
                                            </MenuItem>
                                        </>
                                    )}
                                </Box>
                            </Drawer>
                        </Box>
                    </Toolbar>
                </AppBar>
            </div>
            <LoginModal
                openLoginModal={openLoginModal}
                handleCloseLoginModal={handleCloseLoginModal}
            />
            <RegisterModal
                openRegisterModal={openReisterModal}
                handleCloseRegisterModal={handleCloseRegisterModal}
            />
        </>
    )
}

export default AppNavbar
