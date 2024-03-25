import PropTypes from 'prop-types'

// material-ui
import { useTheme } from '@mui/material/styles'
import { AppBar, IconButton, Toolbar, useMediaQuery } from '@mui/material'

// project import
import AppBarStyled from './AppBarStyled'
import HeaderContent from './HeaderContent'

// assets
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'

// ==============================|| MAIN LAYOUT - HEADER ||============================== //

const Header = ({ open, handleDrawerToggle }) => {
    const theme = useTheme()
    const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'))

    const iconBackColor = 'grey.100'
    const iconBackColorOpen = 'grey.200'

    // common header
    const mainHeader = (
        <Toolbar>
            <IconButton
                disableRipple
                aria-label="open drawer"
                onClick={handleDrawerToggle}
                edge="start"
                color="secondary"
                sx={{
                    color: 'text.primary',
                    bgcolor: open ? iconBackColorOpen : iconBackColor,
                    ml: { xs: 0, lg: -2 },
                }}
            >
                {!open ? <MenuOpenOutlinedIcon /> : <MenuOutlinedIcon />}
            </IconButton>
            <HeaderContent />
        </Toolbar>
    )

    // app-bar params
    const appBar = {
        position: 'fixed',
        color: 'inherit',
        elevation: 0,
        sx: {
            borderBottom: `1px solid ${theme.palette.divider}`,
        },
    }

    return (
        <>
            {!matchDownMD ? (
                <AppBarStyled open={open} {...appBar}>
                    {mainHeader}
                </AppBarStyled>
            ) : (
                <AppBar {...appBar}>{mainHeader}</AppBar>
            )}
        </>
    )
}

Header.propTypes = {
    open: PropTypes.bool,
    handleDrawerToggle: PropTypes.func,
}

export default Header
