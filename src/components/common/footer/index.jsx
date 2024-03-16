import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import './style.css'
import FacebookIcon from '@mui/icons-material/Facebook'
import XIcon from '@mui/icons-material/X'
import GoogleIcon from '@mui/icons-material/Google'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import YouTubeIcon from '@mui/icons-material/YouTube'

function Copyright() {
    return (
        <Typography variant="body2" mt={1}>
            {'Copyright © '}
            <Link
                href="https://mui.com/"
                sx={{ textDecoration: 'none' }}
                className="text-light"
            >
                {import.meta.env.VITE_APP_TITLE || 'ECOM App'}.com&nbsp;
            </Link>
            {new Date().getFullYear()}
        </Typography>
    )
}

export default function Footer() {
    return (
        <div className="container-fluid mt-2 p-0">
            <div className="bg-dark text-white">
                <div className="container p-3 pb-1">
                    <section className="d-flex justify-content-center mb-3">
                        <p
                            color="light"
                            className="btn-outline-dark m-1"
                            href="#!"
                            role="button"
                        >
                            <GoogleIcon />
                        </p>
                        <p
                            color="light"
                            className="btn-outline-dark m-1"
                            href="#!"
                            role="button"
                        >
                            <FacebookIcon />
                        </p>
                        <p
                            color="light"
                            className="btn-outline-dark m-1"
                            href="#!"
                            role="button"
                        >
                            <InstagramIcon />
                        </p>
                        <p
                            color="light"
                            className="btn-outline-dark m-1"
                            href="#!"
                            role="button"
                        >
                            <YouTubeIcon />
                        </p>
                        <p
                            color="light"
                            className="btn-outline-dark m-1"
                            href="#!"
                            role="button"
                        >
                            <LinkedInIcon />
                        </p>
                        <p
                            color="light"
                            className="btn-outline-dark m-1"
                            href="#!"
                            role="button"
                        >
                            <GitHubIcon />
                        </p>
                        <p
                            color="light"
                            className="btn-outline-dark m-1"
                            href="#!"
                            role="button"
                        >
                            <XIcon />
                        </p>
                    </section>
                </div>

                <div
                    className="text-center p-3"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
                >
                    <Copyright />
                </div>
            </div>
        </div>
    )
}
