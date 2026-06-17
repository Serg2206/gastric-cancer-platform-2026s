'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      const res = await fetch('/api/auth/sign-in', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data?.message ?? 'Не удалось войти');
        return;
      }
      window.location.href = '/etudes';
    } catch {
      setError('Сеть недоступна');
    }
  };

  return (
    <div className="mx-auto max-w-md px-4 py-10">
      <h1 className="text-xl font-semibold text-white">Вход</h1>
      <p className="mt-1 text-sm text-slate-400">Войдите, чтобы продолжить обучение.</p>

      <form className="mt-6 space-y-3" onSubmit={handleSubmit}>
        {error ? <div className="rounded-md border border-red-500/30 bg-red-500/10 p-2 text-xs text-red-200">{error}</div> : null}
        <div>
          <label className="block text-xs text-slate-400">Email</label>
          <input
            className="mt-1 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
          />
        </div>
        <div>
          <label className="block text-xs text-slate-400">Пароль</label>
          <input
            className="mt-1 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-md border border-white/10 bg-white/10 px-3 py-2 text-sm text-white hover:bg-white/20"
        >
          Войти
        </button>
      </form>

      <p className="mt-4 text-xs text-slate-400">
        Нет аккаунта? <Link href="/sign-up" className="text-white underline">Зарегистрируйтесь</Link>
      </p>
    </div>
  );
}
