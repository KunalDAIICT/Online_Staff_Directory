import * as React from 'react';
import { Navigate } from "react-router-dom";
import { useState } from 'react';
import { Navbar } from './Navbar';

// import { useParams, useHistory } from 'react-router-dom';

// const theme = createTheme();

export const SendResetLink = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch('http://localhost:3000/sendresetlink', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({email: email}),
        });

        if (res.ok) {
        alert('Reset link sent successfully');
        } else {
        alert('Reset link sending failed');
        }
    };

    return (
        <div className="container">
            <Navbar />
        <h1>Send Reset Link</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            </div>
            <button type="submit" className="btn btn-primary">
            Send Reset Link
            </button>
        </form>
        </div>
    );
}
