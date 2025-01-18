import React, { useEffect, useState } from 'react'
import {
    AppBar,
    Toolbar,
    IconButton,
    Box,
    Badge,
    Avatar,
    Button,
    Drawer,
    MenuItem,
    Divider,
} from '@mui/material'
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong'
import { Notifications, Person, Menu as MenuIcon } from '@mui/icons-material'
import './style.css'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { SearchHeader } from '../searchHeader'
import LoginModal from '../../login_modal'
import RegisterModal from '../../register_modal'
import { logout } from '../../../store/userSlice'

const Header = () => {
    const { isLoggedIn, token } = useSelector((state) => state.user)
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
    const [open, setOpen] = useState(false)
    const [openLoginModal, setOpenLoginModal] = useState(false)
    const [openReisterModal, setOpenResigterModal] = useState(false)
    const handleOpenLoginModal = () => setOpenLoginModal(true)
    const handleCloseLoginModal = () => setOpenLoginModal(false)
    const handleOpenRegisterModal = () => setOpenResigterModal(true)
    const handleCloseRegisterModal = () => setOpenResigterModal(false)

    const toggleDrawer = (newOpen) => () => {
        setOpen(!newOpen)
    }

    const handleLogout = async () => {
        await dispatch(logout())
    }

    useEffect(() => {
        if (!token) {
            navigate('/') // Redirect if user is logged out
        }
    }, [token, navigate])

    const logoStyle = {
        height: 'auto',
        cursor: 'pointer',
    }

    const handleNavigation = (url) => {
        navigate(url)
    }

    return (
        <div>
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                    }}>
                    {/* Logo Section */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Link to="/" className="d-flex logoLink align-items-center">
                            <ReceiptLongIcon className="logo mx-2" fontSize="large" />
                            <h4 className="logoText" style={logoStyle}>
                                {import.meta.env.VITE_APP_TITLE || 'ECOM App'}
                            </h4>
                        </Link>

                        {/* Navigation Links */}

                        <Box
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                alignItems: 'center',
                                gap: 2,
                                ml: 4,
                                flexGrow: 1,
                            }}>
                            {pages.map((page, index) => (
                                <Button
                                    key={index}
                                    color="inherit"
                                    sx={{ fontSize: '1rem' }}
                                    onClick={() => handleNavigation(page.url)}>
                                    {page.name}
                                </Button>
                            ))}
                        </Box>
                    </Box>
                    {/* Right Section: Notifications and User */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexGrow: 0 }}>
                        {/* Search Field */}
                        <Box
                            sx={{
                                position: 'relative',
                                mr: 3,
                                display: { xs: 'none', md: 'block' },
                            }}>
                            <SearchHeader />
                        </Box>
                        {/* Notifications */}
                        <IconButton color="inherit">
                            <Badge badgeContent={3} color="error">
                                <Notifications />
                            </Badge>
                        </IconButton>
                        {isLoggedIn ? (
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Avatar sx={{ bgcolor: 'secondary' }}>
                                    <Person />
                                </Avatar>
                            </Box>
                        ) : (
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Button color="inherit" onClick={handleOpenLoginModal}>
                                    Sign in
                                </Button>
                                <Button color="inherit" onClick={handleOpenRegisterModal}>
                                    Sign up
                                </Button>
                            </Box>
                        )}
                    </Box>
                    {/* Mobile Menu */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton onClick={toggleDrawer(open)}>
                            <MenuIcon />
                        </IconButton>
                        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                            <Box sx={{ width: 250, p: 2 }}>
                                {pages.map((page, index) => (
                                    <MenuItem
                                        key={index}
                                        onClick={() => handleNavigation(page.url)}>
                                        {page.name}
                                    </MenuItem>
                                ))}
                                <Divider />
                                {isLoggedIn ? (
                                    <MenuItem>
                                        <Button
                                            color="primary"
                                            variant="contained"
                                            onClick={handleLogout}>
                                            Logout
                                        </Button>
                                    </MenuItem>
                                ) : (
                                    <>
                                        <MenuItem>
                                            <Button
                                                color="primary"
                                                variant="outlined"
                                                onClick={handleOpenLoginModal}>
                                                Sign in
                                            </Button>
                                        </MenuItem>
                                        <MenuItem>
                                            <Button
                                                color="primary"
                                                variant="contained"
                                                onClick={handleOpenRegisterModal}>
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
            <LoginModal
                openLoginModal={openLoginModal}
                handleCloseLoginModal={handleCloseLoginModal}
            />
            <RegisterModal
                openRegisterModal={openReisterModal}
                handleCloseRegisterModal={handleCloseRegisterModal}
            />
        </div>
    )
}
export default Header
