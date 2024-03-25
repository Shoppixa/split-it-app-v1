import logo from '../assets/brand/brand-big.png'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'

const Homepage = () => {
    return (
        <div className="container-fluid">
            <div className="row d-flex justify-content-center align-items-center my-5">
                <div className="col-md-6 justify-content-center my-5">
                    <h1 className="text-center fw-bolder">
                        Let&rsquo;s split the bills not the friendships.
                    </h1>
                    <p className="text-center">
                        We organize your bills, so you can chill.
                    </p>
                    <div className="d-flex justify-content-center">
                        <Link to="/dashboard">
                            <Button variant="contained">Get Started</Button>
                        </Link>
                    </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center my-5">
                    <img src={logo} className="img-fluid mt-5 mb-5" />
                </div>
            </div>
        </div>
    )
}
export default Homepage
