import React, { useState } from "react";
import axios from "axios";
import "./login.css"; 

const Login = ({ onLoginSuccess }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8080/api/auth/login", null, {
                params: { username, password }
            });

            if (response.data === "Login Successful!") {
                onLoginSuccess();  
            } else {
                setErrorMessage("Invalid username or password!");  
            }
        } catch (error) {
            console.error(error);
            setErrorMessage("An error occurred. Please try again.");
        }
    };

    return (
        <div className="login-container">
            <h2>Login to Your Account</h2>
            <form onSubmit={handleLogin}>
                <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
                {errorMessage && <p className="error">{errorMessage}</p>}
            </form>
        </div>
    );
};

export default Login;

