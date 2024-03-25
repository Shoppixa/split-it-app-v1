import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { Box, Toolbar, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import Header from '../MainLayout/Header'
import { openDrawer } from '../../store/reducers/menu'
// ==============================|| MINIMAL LAYOUT ||============================== //

const MinimalLayout = () => {
    const theme = useTheme()
    const matchDownLG = useMediaQuery(theme.breakpoints.down('lg'))
    const dispatch = useDispatch()

    const { drawerOpen } = useSelector((state) => state.menu)
    const [open, setOpen] = useState(true)
    const handleDrawerToggle = () => {
        setOpen(!open)
        dispatch(openDrawer({ drawerOpen: !open }))
    }

    useEffect(() => {
        setOpen(!matchDownLG)
        dispatch(openDrawer({ drawerOpen: !matchDownLG }))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [matchDownLG])
    useEffect(() => {
        if (open !== drawerOpen) setOpen(drawerOpen)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [drawerOpen])
    return (
        <Box sx={{ display: 'flex', width: '100%' }}>
            <Header open={open} handleDrawerToggle={handleDrawerToggle} />
            <Box
                component="main"
                sx={{ width: '100%', flexGrow: 1, p: { xs: 2, sm: 3 } }}
            >
                <Toolbar />
                <Outlet />
            </Box>
        </Box>
    )
}

export default MinimalLayout
