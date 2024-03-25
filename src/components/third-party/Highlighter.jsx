import PropTypes from 'prop-types'
import { useState } from 'react'

// material-ui
import { Box, CardActions, Divider, IconButton, Tooltip } from '@mui/material'

// third-party

// assets
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined'

// ==============================|| CLIPBOARD & HIGHLIGHTER   ||============================== //

const Highlighter = () => {
    const [highlight, setHighlight] = useState(false)

    return (
        <Box sx={{ position: 'relative' }}>
            <CardActions
                sx={{ justifyContent: 'flex-end', p: 1, mb: highlight ? 1 : 0 }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        position: 'inherit',
                        right: 0,
                        top: 6,
                    }}
                >
                    <Divider
                        orientation="vertical"
                        variant="middle"
                        flexItem
                        sx={{ mx: 1 }}
                    />
                    <Tooltip title="Show the source" placement="top-end">
                        <IconButton
                            sx={{ fontSize: '0.875rem' }}
                            size="small"
                            color={highlight ? 'primary' : 'secondary'}
                            onClick={() => setHighlight(!highlight)}
                        >
                            <CodeOutlinedIcon />
                        </IconButton>
                    </Tooltip>
                </Box>
            </CardActions>
        </Box>
    )
}

Highlighter.propTypes = {
    children: PropTypes.node,
}

export default Highlighter
