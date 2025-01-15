import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'
import { SearchHeader } from '../common/searchHeader'
import { Avatar, Box, Paper, Stack, Typography } from '@mui/material'

const FriendList = () => {
    const friends = [
        { value: 'Test User 1', label: 'Test User 1' },
        { value: 'Test User 2', label: 'Test User 2' },
        { value: 'Test User 3', label: 'Test User 3' },
        { value: 'Test User 4', label: 'Test User 4' },
    ]
    return (
        <div>
            <h6 className="p-2 mb-3 shadow text-center fw-bolder">
                <Link to="/friends" className="text-decoration-none text-dark">
                    My Friends
                </Link>
            </h6>
            <SearchHeader />
            <Paper
                elevation={3}
                sx={{
                    p: 3,
                    borderRadius: 4,
                }}>
                <Typography variant="h6" sx={{ mb: 3, textAlign: 'center' }}>
                    Friend Requests
                </Typography>
                <Box sx={{  mx: 'auto' }}>
                    {friends.map((friend) => (
                        <Paper
                            key={friend.value}
                            elevation={2}
                            sx={{
                                p: 2,
                                mb: 2,
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Avatar
                                    src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                    sx={{ width: 45, height: 45 }}
                                />
                                <Typography>{friend.label}</Typography>
                            </Box>
                            <Stack direction="row" spacing={1}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="small"
                                    startIcon={<DeleteIcon />}>
                                    Accept Request
                                </Button>
                                <Button
                                    variant="contained"
                                    color="error"
                                    size="small"
                                    startIcon={<DeleteIcon />}>
                                    Remove Friend
                                </Button>
                            </Stack>
                        </Paper>
                    ))}
                </Box>
            </Paper>
            <div className="list-group shadow-5-strong my-2">
                {friends.map((friend) => (
                    <div
                        key={friend.value}
                        className="list-group-item border-0 d-flex justify-content-between align-items-center shadow mb-2">
                        <Link
                            to={`/user/${friend.value}`}
                            className="d-flex align-items-center text-decoration-none text-dark">
                            <img
                                src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                alt=""
                                style={{ width: '45px', height: '45px' }}
                                className="rounded-circle ms-0"
                            />
                            <div className="ms-3">
                                <p className="mb-1">{friend.label}</p>
                            </div>
                        </Link>
                        <Button className="bg-danger text-light mx-2">
                            <DeleteIcon /> Remove Friend
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default FriendList
