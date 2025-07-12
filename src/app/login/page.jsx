'use client';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Login() {
  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await signIn('credentials', {
      email: form.email,
      password: form.password,
      redirect: false,
    });

    if (res.ok) {
      router.push('/');
    } else {
      alert('Login failed');
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          className="w-full border p-2"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
        />
        <input
          className="w-full border p-2"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={e => setForm({ ...form, password: e.target.value })}
        />
        <button className="bg-green-500 text-white px-4 py-2 rounded" type="submit">
          Login
        </button>
      </form>

      <div className="mt-4 text-center">
        <button
          onClick={() => signIn('google')}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
}
