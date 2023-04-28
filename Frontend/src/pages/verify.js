import * as React from 'react';
import { useNavigate,useParams } from "react-router-dom";
import { Button } from '@mui/material';

import { Navbar } from '../pages/Navbar';

export const Verify = () => {
    const {token} = useParams();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch('http://localhost:3000/verify-email', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
        });

        if (res.ok) {
        alert('User verified successfully');
        navigate('/loginpage');
        } else {
        alert('User verification failed');
        }
    };

    return (
        <div className="container">

            

        <form onSubmit={handleSubmit}>
            <Button type="submit" variant='contained'>
                Verify Email
            </Button>
        </form>
        </div>
    );
}