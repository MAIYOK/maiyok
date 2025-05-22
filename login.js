
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('client');
  const router = useRouter();

  const handleLogin = () => {
    localStorage.setItem('username', username);
    localStorage.setItem('role', role);
    router.push('/dashboard');
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Login</h2>
      <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
      <select value={role} onChange={e => setRole(e.target.value)}>
        <option value="client">Client</option>
        <option value="admin">Admin</option>
      </select>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
