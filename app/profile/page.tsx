'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { useProgress } from '@/hooks/useProgress';

const etudes = [
  { slug: 'etude-1', title: 'ЭТЮД I', name: 'Демографический шизофрен' },
  { slug: 'etude-2', title: 'ЭТЮД II', name: 'Мультиомиксная навигация' },
  { slug: 'etude-3', title: 'ЭТЮД III', name: 'MATTERHORN и иммунотерапия' },
  { slug: 'etude-4', title: 'ЭТЮД IV', name: 'CRITICS-II' },
  { slug: 'etude-5', title: 'ЭТЮД V', name: 'Da Vinci 5' },
  { slug: 'etude-6', title: 'ЭТЮД VI', name: 'ICG-Флуоресценция' },
  { slug: 'etude-7', title: 'ЭТЮД VII', name: 'Проксимальная резекция' },
  { slug: 'etude-8', title: 'ЭТЮД VIII', name: 'OLA при cT4a' },
  { slug: 'etude-9', title: 'ЭТЮД IX', name: 'PIPAC/HIPEC' },
  { slug: 'etude-10', title: 'ЭТЮД X', name: 'Симуляционная революция' },
  { slug: 'etude-11', title: 'ЭТЮД XI', name: 'MDT 2.0' },
  { slug: 'etude-12', title: 'ЭТЮД XII', name: 'Патоморфоз как пророчество' },
];

export default function ProfilePage() {
  const { completed, percent, lastVisited } = useProgress();

  const lastVisitedLabel = useMemo(() => {
    if (!lastVisited) return null;
    const found = etudes.find((e) => e.slug === lastVisited);
    return found ? `${found.title}: ${found.name}` : lastVisited;
  }, [lastVisited]);

  return (
    <div className="space-y-6">
      <section className="space-y-2">
        <h1 className="text-xl font-semibold text-white">Профиль и прогресс</h1>
        <p className="text-sm text-slate-400">
          Данные хранятся локально в браузере. После подключения аутентификации прогресс будет синхронизирован между устройствами.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="text-xs text-slate-400">Пройдено модулей</div>
          <div className="text-lg font-semibold text-white">
            {completed.length} / {etudes.length}
          </div>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="text-xs text-slate-400">Общий прогресс</div>
          <div className="text-lg font-semibold text-white">{percent}%</div>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="text-xs text-slate-400">Последний модуль</div>
          <div className="text-sm font-medium text-white">{lastVisitedLabel ?? '—'}</div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-400">
          Список этюдов
        </h2>
        <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
          {etudes.map((item) => {
            const done = completed.includes(item.slug);
            return (
              <li key={item.slug} className="flex items-center justify-between rounded-md border border-white/10 bg-white/5 px-3 py-2">
                <div className="space-y-0.5">
                  <div className="text-xs text-slate-400">{item.title}</div>
                  <div className="text-sm text-white">{item.name}</div>
                </div>
                <div className="flex items-center gap-3">
                  {done ? (
                    <span className="text-xs uppercase text-emerald-300">Завершён</span>
                  ) : (
                    <span className="text-xs text-slate-500">Не начат</span>
                  )}
                  <Link
                    href={`/etudes/${item.slug}`}
                    className="text-xs text-slate-300 underline decoration-white/20 underline-offset-4 hover:text-white"
                  >
                    Открыть
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
