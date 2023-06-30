import { useState } from 'react';
import axios from 'axios';
import {apiDomain} from '../utils/utils'
import './Register.css';

export default function Form() {
    const [username, setusername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const handleusername = (e) => {
        setusername(e.target.value);
        setSubmitted(false);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === '' || email === '' || password === '') {
            setError(true);
        } else {
            // Create an object with the user data
            const userData = {
                username: username,
                email: email,
                password: password,
            };

            // Make the Axios POST request to register the user
            axios.post(`${apiDomain}/auth/register`, userData)
                 .then((response) => {
                    setSubmitted(true);
                    setError(false);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    };

    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? '' : 'none',
                }}
            >
                <h1>User {username} successfully registered!!</h1>
            </div>
        );
    };

    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? '' : 'none',
                }}
            >
                <h1>Please enter all the fields</h1>
            </div>
        );
    };

    return (
        <div className="form">
            <div>
                <h1>User Registration</h1>
            </div>
            <div className="messages">
                {errorMessage()}
                {successMessage()}
            </div>
            <form>
                <label className="label">username</label>
                <input
                    onChange={handleusername}
                    className="input"
                    value={username}
                    type="text"
                />
                <label className="label">Email</label>
                <input
                    onChange={handleEmail}
                    className="input"
                    value={email}
                    type="email"
                />
                <label className="label">Password</label>
                <input
                    onChange={handlePassword}
                    className="input"
                    value={password}
                    type="password"
                />
                <button onClick={handleSubmit} className="btn" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}
