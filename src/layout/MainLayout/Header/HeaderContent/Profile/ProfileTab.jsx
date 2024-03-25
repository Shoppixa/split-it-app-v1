import PropTypes from 'prop-types'
import { useState } from 'react'

// material-ui
import { useTheme } from '@mui/material/styles'
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'

// assets
import PersonIcon from '@mui/icons-material/Person'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import EditIcon from '@mui/icons-material/Edit'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

// ==============================|| HEADER PROFILE - PROFILE TAB ||============================== //

const ProfileTab = ({ handleLogout }) => {
    const theme = useTheme()

    const [selectedIndex, setSelectedIndex] = useState(0)
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index)
    }

    return (
        <List
            component="nav"
            sx={{
                p: 0,
                '& .MuiListItemIcon-root': {
                    minWidth: 32,
                    color: theme.palette.grey[500],
                },
            }}
        >
            <ListItemButton
                selected={selectedIndex === 0}
                onClick={(event) => handleListItemClick(event, 0)}
            >
                <ListItemIcon>
                    <EditIcon />
                </ListItemIcon>
                <ListItemText primary="Edit Profile" />
            </ListItemButton>
            <ListItemButton
                selected={selectedIndex === 1}
                onClick={(event) => handleListItemClick(event, 1)}
            >
                <ListItemIcon>
                    <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary="View Profile" />
            </ListItemButton>

            <ListItemButton
                selected={selectedIndex === 3}
                onClick={(event) => handleListItemClick(event, 3)}
            >
                <ListItemIcon>
                    <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="Social Profile" />
            </ListItemButton>
            <ListItemButton
                selected={selectedIndex === 4}
                onClick={(event) => handleListItemClick(event, 4)}
            >
                <ListItemIcon>
                    <AccountBalanceWalletIcon />
                </ListItemIcon>
                <ListItemText primary="Billing" />
            </ListItemButton>
            <ListItemButton
                selected={selectedIndex === 2}
                onClick={handleLogout}
            >
                <ListItemIcon>
                    <ExitToAppIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
            </ListItemButton>
        </List>
    )
}

ProfileTab.propTypes = {
    handleLogout: PropTypes.func,
}

export default ProfileTab
