import { BrowserRouter as Router } from 'react-router-dom'
import { useEffect } from 'react'
import Routes from './routes'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from './store'
// import { createTheme } from '@mui/material'
// import PropTypes from 'prop-types'
import { useMemo } from 'react'
// material-ui
import { CssBaseline, StyledEngineProvider } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'

function App() {
    const themeOptions = useMemo(
        () => ({
            breakpoints: {
                values: {
                    xs: 0,
                    sm: 768,
                    md: 1024,
                    lg: 1266,
                    xl: 1536,
                },
            },
            direction: 'ltr',
            mixins: {
                toolbar: {
                    minHeight: 60,
                    paddingTop: 8,
                    paddingBottom: 8,
                },
            },
        }),
        []
    )

    useEffect(() => {
        document.title = import.meta.env.VITE_APP_TITLE || 'ECOM App'
    }, [])

    const themes = createTheme(themeOptions)
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={themes}>
                <CssBaseline />
                <ReduxProvider store={store}>
                    <Router>
                        <Routes />
                    </Router>
                </ReduxProvider>
            </ThemeProvider>
        </StyledEngineProvider>
    )
}

export default App
