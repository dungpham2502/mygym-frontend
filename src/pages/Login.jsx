import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

export const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, error, isLoading } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await login(email, password);
    }

    return (
        <form className="login" onSubmit={handleSubmit}>
            <h3>Log In</h3>
            <label htmlFor="">Email:</label>
            <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />

            <h3>Password</h3>
            <label htmlFor="">Password:</label>
            <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <button>Log In</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}
