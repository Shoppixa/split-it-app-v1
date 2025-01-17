import React from 'react'
import { Grid, Box, Paper, useMediaQuery, useTheme } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import LeftMenu from '../../components/dashboard/left_menu'
import RightMenu from '../../components/dashboard/right_menu'
import { styled } from '@mui/material/styles'

const Dashboard = () => {
    const user = useSelector((state) => state.user)
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        height: '100vh',
        color: theme.palette.text.secondary,
        ...theme.applyStyles('dark', {
            backgroundColor: '#1A2027',
        }),
    }))

    return (
        <Box className="container-fluid text-center mt-5">
            <Grid container spacing={1}>
                {!isMobile && (
                    <Grid item xs={2}>
                        <Item>
                            <LeftMenu />
                        </Item>
                    </Grid>
                )}
                <Grid item xs={isMobile ? 12 : 8}>
                    <Outlet />
                </Grid>
                {!isMobile && (
                    <Grid item xs={2}>
                        <Item>
                            <RightMenu />
                        </Item>
                    </Grid>
                )}
            </Grid>
        </Box>
    )
}

export default Dashboard
