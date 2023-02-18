import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContexts';
import './singUp.css'


const SingUp = () => {

    const [error, setError] = useState(null);
    const { createUser } = useContext(AuthContext);
    const handelSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        // console.log(email, Password, confirm)
        if (password < 6) {
            setError(`password should be 6 characters or more`)
        }
        if (password !== confirm) {
            setError(`your Password did't match`);
            return;
        }
        createUser(email, password)
            .then(res => {
                const user = res.user
                console.log(user)
                form.reset()
            })
            .catch(er => {
                const error = er.message
                setError(error.slice(22, -2))
            })
    }
    return (
        <div className='from-container'>
            <h2 className='from-title'>SingUp</h2>
            <form onSubmit={handelSubmit}>
                <div className="from-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' required />
                </div>
                <div className="from-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' required />
                </div>
                <div className="from-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name='confirm' required />
                </div>
                <p className='text-error'>{error}</p>
                <input className='btn-submit' type="submit" value="SingUp" />
            </form>
            <p>Already Have an Account ? <Link to='/login'>Login</Link></p>

        </div>
    );
};

export default SingUp;