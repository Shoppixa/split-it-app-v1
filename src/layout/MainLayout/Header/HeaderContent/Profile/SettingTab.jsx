import { useState } from 'react'

// material-ui
import { useTheme } from '@mui/material/styles'
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'

import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined'
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined'
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'

// ==============================|| HEADER PROFILE - SETTING TAB ||============================== //

const SettingTab = () => {
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
                    <HelpOutlineOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Support" />
            </ListItemButton>
            <ListItemButton
                selected={selectedIndex === 1}
                onClick={(event) => handleListItemClick(event, 1)}
            >
                <ListItemIcon>
                    <AccountCircleOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Account Settings" />
            </ListItemButton>
            <ListItemButton
                selected={selectedIndex === 2}
                onClick={(event) => handleListItemClick(event, 2)}
            >
                <ListItemIcon>
                    <LockOpenOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Privacy Center" />
            </ListItemButton>
            <ListItemButton
                selected={selectedIndex === 3}
                onClick={(event) => handleListItemClick(event, 3)}
            >
                <ListItemIcon>
                    <CommentOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Feedback" />
            </ListItemButton>
            <ListItemButton
                selected={selectedIndex === 4}
                onClick={(event) => handleListItemClick(event, 4)}
            >
                <ListItemIcon>
                    <FormatListBulletedOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="History" />
            </ListItemButton>
        </List>
    )
}

export default SettingTab
