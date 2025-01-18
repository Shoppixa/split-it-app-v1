import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search'
import Loader from '../loader';

export const SearchHeader = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('')
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && searchQuery.trim()) {
            navigate(`/friend-search?fs=${encodeURIComponent(searchQuery)}`)
        }
    }

    const searchHandler = (e) => {
        navigate(`/friend-search?fs=${encodeURIComponent(searchQuery)}`)
    }

    return (
        <TextField
            variant="outlined"
            size="small"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            fullWidth
            InputProps={{
                endAdornment: (
                    <IconButton onClick={searchHandler}>
                        <SearchIcon />
                    </IconButton>
                ),
            }}
            sx={{
                bgcolor: 'white',
                borderRadius: '4px',
                width: { xs: '150px', sm: '300px' },
            }}
        />
    )
}
