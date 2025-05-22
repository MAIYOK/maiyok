
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Dashboard() {
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('');
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem('username');
    const userRole = localStorage.getItem('role');
    if (!user) {
      router.push('/login');
    } else {
      setUsername(user);
      setRole(userRole);
    }
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Dashboard</h2>
      <p>Welcome, {username}!</p>
      <p>Role: {role}</p>
      {role === 'admin' ? (
        <div>
          <p>Admin Panel: Add/Edit/Delete Products</p>
        </div>
      ) : (
        <div>
          <p>Client Panel: View Loan Products</p>
        </div>
      )}
      <button onClick={() => {
        localStorage.clear();
        router.push('/login');
      }}>Logout</button>
    </div>
  );
}
