import logo from '../assets/brand/brand-big.png'
import RegisterForm from '../components/register_page/index.jsx'

const RegisterPage = () => {
    return (
        <div className="container">
            <div className="text-center my-2">
                <img
                    src={logo}
                    alt="my_logo"
                    className="img-fluid mt-5 mb-5"
                    style={{ maxHeight: '200px' }}
                />
            </div>
            <RegisterForm />
        </div>
    )
}
export default RegisterPage
