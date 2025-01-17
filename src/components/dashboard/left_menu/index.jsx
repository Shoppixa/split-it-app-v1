import './style.css'
import { useState } from 'react'
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { useSelector } from 'react-redux'

const LeftMenu = () => {
    const { userDetails } = useSelector((state) => state.user)
    const side_nav_pages = [
        { url: '/dashboard', name: 'Dashboard' },
        { url: '/friends', name: 'My Friends' },
        { url: '/groups', name: 'My Groups' },
        { url: '/myexpenses', name: 'My Expenses' },
        { url: '', name: 'Previous Month Records' },
        { url: '', name: 'My Reports' },
        { url: '', name: 'Budget Tracker' },
        { url: '', name: 'Financial Goals' },
        { url: '', name: 'Milestones' },
        { url: '', name: 'Loan Calculator' },
        { url: '', name: 'Currency Converter' },
        { url: '', name: 'Update Details' },
    ]
    const [sidebarOpen, setSidebarOpen] = useState(true)
    return (
        <List>
            {side_nav_pages.map((item, index) => (
                <ListItem key={index}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    {sidebarOpen && (
                        <ListItemText
                            primary={item.name}
                            primaryTypographyProps={{ fontWeight: 'bold' }}
                            secondaryTypographyProps={{
                                variant: 'caption',
                                color: 'primary',
                                fontWeight: 'bold',
                            }}
                        />
                    )}
                </ListItem>
            ))}
        </List>
    )
}
export default LeftMenu
