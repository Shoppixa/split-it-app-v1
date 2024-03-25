// material-ui
import { Box, useMediaQuery } from '@mui/material'
import MobileSection from './MobileSection'
import HeaderList from './HeaderList'

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
    const matchesXs = useMediaQuery((theme) => theme.breakpoints.down('md'))
    const isAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated'))

    return (
        <>
            {matchesXs && <Box sx={{ width: '100%', ml: 1 }} />}
            <HeaderList is_logged_in={isAuthenticated} />
            {matchesXs && <MobileSection />}
        </>
    )
}

export default HeaderContent
