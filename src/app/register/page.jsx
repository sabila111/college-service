'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Register() {
  const router = useRouter();
  const [form, setForm] = useState({ name: '', email: '', password: '' , imgURL:''});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });

    if (res.ok) {
      alert('Registered successfully!');
      router.push('/login');
    } else {
      const data = await res.json();
      alert(data.message || 'Error');
    }
  };

  return (
    <div className=" max-w-md mx-auto">
      <h1 className="text-4xl font-bold  text-center my-14">Register</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full border p-2"
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="w-full border p-2"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
        />
        <input
          className="w-full border p-2"
          type="text"
          placeholder="ImgURL"
          value={form.imgURL}
          onChange={e => setForm({ ...form, imgURL: e.target.value })}
        />
        <input
          className="w-full border p-2"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={e => setForm({ ...form, password: e.target.value })}
        />
        <button  className="bg-blue-800 border-2  text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
