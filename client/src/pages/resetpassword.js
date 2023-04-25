import * as React from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { useState } from 'react';
import { Navbar } from './Navbar';
// import { useParams, useHyistory } from 'react-router-dom';

// const theme = createTheme();

export const ResetPassword = () => {
    const {token} = useParams();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
        alert('Passwords do not match');
            
        return;
        }

        const response = await fetch('http://localhost:3000/resetpassword', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
        body: JSON.stringify({newpassword: password}),
        })
        .then((response) => {
            if (response.status === 200) {
                alert('Password reset successfully');
                navigate('/loginpage');
            } else {
                alert('Password reset failed');
            }
        });
    };

    return (
        <div className="container">
            <Navbar />
        <h1>Reset Password</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
                type="password"
                className="form-control"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            </div>
            <button type="submit" className="btn btn-primary">
            Reset Password
            </button>
        </form>
        </div>
    );
}



// export const ResetPassword = () => {
//     const {token} = useParams();
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
    
//     // const json = await response.json(); // Convert response body to JSON object
//     // console.log(json.token); // Log the token field to the console

//     // localStorage.setItem("token", json.token);
    
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (password !== confirmPassword) {
//         alert('Passwords do not match');
//         return;
//         }
    
//         const res = await fetch('http://localhost:3000/resetpassword', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': 'Bearer ' + token,
//         },
//         body: JSON.stringify({newpassword: password}),
//         });
    
//         if (res.ok) {
//         alert('Password reset successful');
//         Navigate('/loginpage');
//         } else {
//         alert('Password reset failed');
//         }
//     };
    
//     return (
//         <div className="container">
//         <h1>Reset Password</h1>
//         <form onSubmit={handleSubmit}>
//             <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input
//                 type="password"
//                 className="form-control"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//             />
//             </div>
//             <div className="form-group">
//             <label htmlFor="confirmPassword">Confirm Password</label>
//             <input
//                 type="password"
//                 className="form-control"
//                 id="confirmPassword"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//             />
//             </div>
//             <button type="submit" className="btn btn-primary">
//             Reset Password
//             </button>
//         </form>
//         </div>
//     );
//     }