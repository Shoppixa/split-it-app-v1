import * as React from 'react'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import MenuItem from '@mui/material/MenuItem'
import Drawer from '@mui/material/Drawer'
import MenuIcon from '@mui/icons-material/Menu'
import PropTypes from 'prop-types'
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong'
import Box from '@mui/material/Box'
import LoginModal from '../../../../components/login_modal'
import RegisterModal from '../../../../components/register_modal'
import { Link } from 'react-router-dom'
import Profile from './Profile'
import Notification from './Notification'
import { useMediaQuery } from '@mui/material'
import './header.css'

const logoStyle = {
    height: 'auto',
    cursor: 'pointer',
}

function AppNavbar(props) {
    const is_logged_in = props.is_logged_in
    const matchesXs = useMediaQuery((theme) => theme.breakpoints.down('md'))
    const logged_in_pages = [
        'Dashboard',
        'Profile',
        'Groups',
        'Features',
        'Pricing',
        'FAQ',
    ]
    const logged_out_pages = ['Features', 'Pricing', 'FAQ']
    const pages = is_logged_in ? logged_in_pages : logged_out_pages

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

    return (
        <>
            <AppBar position="sticky" className="appBar">
                <Toolbar variant="regular" className="toolbar">
                    <Box className="box">
                        <Link
                            to="/"
                            className="d-flex logoLink align-items-center"
                        >
                            <ReceiptLongIcon
                                className="logo"
                                fontSize={'large'}
                            />
                            <h4 className="logoText" style={logoStyle}>
                                {import.meta.env.VITE_APP_TITLE || 'ECOM App'}
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
                                        {page}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            alignItems: 'center',
                        }}
                    >
                        {is_logged_in ? (
                            <>
                                <Notification />
                                {!matchesXs && <Profile />}
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
                                    minWidth: '60vw',
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
        </>
    )
}

export default AppNavbar

AppNavbar.propTypes = {
    is_logged_in: PropTypes.bool,
}
