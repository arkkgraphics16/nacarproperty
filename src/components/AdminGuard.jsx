import { useState } from 'react';
import { verifyPassword, getPasswordHint } from '../lib/auth';

const AdminGuard = ({ children }) => {
  const [status, setStatus] = useState({ authenticated: false, loading: false, error: '' });
  const [input, setInput] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus((prev) => ({ ...prev, loading: true, error: '' }));
    try {
      const valid = await verifyPassword(input);
      if (valid) {
        setStatus({ authenticated: true, loading: false, error: '' });
      } else {
        setStatus({ authenticated: false, loading: false, error: 'Incorrect password. Please try again.' });
      }
    } catch (error) {
      setStatus({ authenticated: false, loading: false, error: 'Unable to verify password.' });
    }
  };

  if (status.authenticated) {
    return children;
  }

  return (
    <form className="admin-guard" onSubmit={handleSubmit}>
      <h2>Agent Access</h2>
      <p>Please enter the agent password to manage listings. Hint: {getPasswordHint()}.</p>
      <input
        type="password"
        placeholder="Password"
        value={input}
        onChange={(event) => setInput(event.target.value)}
        required
      />
      <button type="submit" className="btn" disabled={status.loading}>
        {status.loading ? 'Checking...' : 'Unlock Admin'}
      </button>
      {status.error && <span style={{ color: '#ff9c9c' }}>{status.error}</span>}
    </form>
  );
};

export default AdminGuard;
