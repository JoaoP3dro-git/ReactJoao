import { useState } from "react";
import Input from './Input';
import Button from './Button';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ email, password })
    };

    return (
        <form onSubmit={handleSubmit} className="login-form">
            <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit">Login</Button>
        </form>
    )
}

export default LoginForm;