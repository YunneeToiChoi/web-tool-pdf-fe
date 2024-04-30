import React, { useState, useEffect } from 'react';
import decodeJWTToken  from '~/services/decodeJWTToken.js';
function Home() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [usersName, setUsersName] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
                const decodedData = decodeJWTToken(token);
                const { email } = decodedData; // Lấy email từ dữ liệu giải mã
                setUsersName(email);
                setIsLoggedIn(true);
        }
    }, []);

    return (
        <div>
            {isLoggedIn ? (
                <div>
                    <h1>Welcome back, {usersName}!</h1>
                </div>
            ) : (
                <div>
                    <h1>Welcome to our website! Please log in.</h1>
                </div>
            )}
        </div>
    );
}

export default Home;
