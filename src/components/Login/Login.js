import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContexts';
import './Login.css'

const Login = () => {
    const [error, setError] = useState(null);
    const { singIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handelSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, Password, confirm)

        singIn(email, password)
            .then(res => {
                const user = res.user
                console.log(user)
                form.reset()
                navigate(from, { replace: true })
            })
            .catch(er => {
                const error = er.message
                setError(error.slice(22, -2))
            })
    }
    return (
        <div className='from-container'>
            <h2 className='from-title'> Login</h2>
            <form onSubmit={handelSubmit}>
                <div className="from-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' required />
                </div>
                <div className="from-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' required />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
                <p className='text-error'>{error}</p>
            </form>
            <p>New to ema jhon <Link to='/singUp'> Create a New Account</Link></p>
        </div>
    );
};

export default Login;