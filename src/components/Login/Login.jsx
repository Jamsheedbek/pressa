import Footer from '../Footer/Footer';
import './Login.scss';

const Login = () => {
    return (
        <>
            <div className="login">
                <h2 className="login-title">SIGN UP</h2>
                <form
                    className="login-form"
                    action="#"
                    method="POST"
                    encType=""
                >
                    <label className="login-label" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="login-input"
                        type="email"
                        name="email"
                        id="email"
                    />
                    <label className="login-label" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="login-input"
                        type="password"
                        name="password"
                        id="password"
                    />
                    <button className="login-btn" type="submit">
                        LOGIN
                    </button>
                </form>
            </div>
        </>
    );
};

export default Login;
