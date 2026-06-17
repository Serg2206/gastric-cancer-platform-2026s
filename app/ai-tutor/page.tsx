'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const messagesHistory = [
  {
    role: 'assistant',
    content: 'Привет. Я AI-тьютор по хирургии рака желудка. Задавайте вопрос по любому этюду или клиническому сценарию.',
  },
];

export default function AITutorPage() {
  const [messages, setMessages] = useState(messagesHistory);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages]);

  const send = useCallback(async () => {
    const text = input.trim();
    if (!text) return;
    setInput('');
    setMessages((m) => [...m, { role: 'user', content: text }]);
    setIsLoading(true);
    try {
      const res = await fetch('/api/ai/tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, { role: 'user', content: text }] }),
      });
      const data = await res.json();
      const answer = data?.answer ?? data?.content ?? 'Сервис недоступен.';
      setMessages((m) => [...m, { role: 'assistant', content: answer }]);
    } catch (e) {
      setMessages((m) => [...m, { role: 'assistant', content: 'Ошибка при обращении к модели.' }]);
    } finally {
      setIsLoading(false);
    }
  }, [input, messages]);

  return (
    <div className="mx-auto flex h-[calc(100vh-8rem)] max-w-3xl flex-col">
      <div className="space-y-1 border-b border-white/10 pb-3">
        <h1 className="text-xl font-semibold text-white">AI-тьютор</h1>
        <p className="text-sm text-slate-400">Вопросы по протоколам, хирургии, патологии и тактике.</p>
      </div>

      <div ref={listRef} className="flex-1 overflow-y-auto py-4">
        <div className="space-y-3">
          {messages.map((msg, idx) => {
            const isUser = msg.role === 'user';
            return (
              <div key={idx} className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[80%] rounded-lg border px-3 py-2 text-sm ${
                    isUser ? 'border-white/10 bg-white/10 text-white' : 'border-white/10 bg-white/5 text-slate-200'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            );
          })}
          {isLoading ? (
            <div className="flex justify-start">
              <div className="max-w-[80%] rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300">Думаю…</div>
            </div>
          ) : null}
        </div>
      </div>

      <form
        className="mt-3 flex items-center gap-2 border-t border-white/10 pt-3"
        onSubmit={(e) => {
          e.preventDefault();
          send();
        }}
      >
        <input
          className="flex-1 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-slate-500 outline-none"
          placeholder="Задайте вопрос по этюду…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="rounded-md border border-white/10 px-3 py-2 text-sm text-slate-200 hover:border-white/20 hover:bg-white/10 disabled:opacity-50"
        >
          Отправить
        </button>
      </form>
    </div>
  );
}
