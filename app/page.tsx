'use client';

import Link from 'next/link';
import { useProgress } from '@/hooks/useProgress';

const etudes = [
  { slug: 'etude-1', number: 'I', name: 'Демографический шизофрен', tag: 'Диагностика' },
  { slug: 'etude-2', number: 'II', name: 'Мультиомиксная навигация', tag: 'Стратификация' },
  { slug: 'etude-3', number: 'III', name: 'MATTERHORN и иммунотерапия', tag: 'Протокол' },
  { slug: 'etude-4', number: 'IV', name: 'CRITICS-II', tag: 'Хирургия' },
  { slug: 'etude-5', number: 'V', name: 'Da Vinci 5', tag: 'Робототехника' },
  { slug: 'etude-6', number: 'VI', name: 'ICG-Флуоресценция', tag: 'Интраоп' },
  { slug: 'etude-7', number: 'VII', name: 'Проксимальная резекция', tag: 'Тактика' },
  { slug: 'etude-8', number: 'VIII', name: 'OLA при cT4a', tag: 'Доспуг' },
  { slug: 'etude-9', number: 'IX', name: 'PIPAC/HIPEC', tag: 'Перитонеальные' },
  { slug: 'etude-10', number: 'X', name: 'Симуляционная революция', tag: 'Образование' },
  { slug: 'etude-11', number: 'XI', name: 'MDT 2.0', tag: 'AI-консилиум' },
  { slug: 'etude-12', number: 'XII', name: 'Патоморфоз как пророчество', tag: 'Оценка' },
];

const columns = [
  {
    title: 'Диагностика и планирование',
    items: etudes.filter((e) => ['etude-1', 'etude-2', 'etude-3'].includes(e.slug)),
  },
  {
    title: 'Хирургическое мастерство',
    items: etudes.filter((e) => ['etude-4', 'etude-5', 'etude-6', 'etude-7', 'etude-8'].includes(e.slug)),
  },
  {
    title: 'Инновации и результаты',
    items: etudes.filter((e) => ['etude-9', 'etude-10', 'etude-11', 'etude-12'].includes(e.slug)),
  },
];

export default function HomePage() {
  const { completed } = useProgress();
  const progress = Math.round((completed.length / etudes.length) * 100);

  return (
    <div className="space-y-6">
      <section className="space-y-2">
        <h1 className="text-2xl font-semibold text-white">Гастрик Платформа</h1>
        <p className="text-sm text-slate-300">
          Интерактивный курс по хирургии рака желудка: от диагностики до оценки результатов.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="text-xs text-slate-400">Пройдено модулей</div>
          <div className="text-lg font-semibold text-white">{completed.length} / {etudes.length}</div>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="text-xs text-slate-400">Прогресс</div>
          <div className="text-lg font-semibold text-white">{progress}%</div>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="text-xs text-slate-400">Формат</div>
          <div className="text-lg font-semibold text-white">12 этюдов + кейсы</div>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {columns.map((col) => (
          <div key={col.title} className="space-y-3">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-400">
              {col.title}
            </h2>
            <ul className="space-y-2">
              {col.items.map((item) => {
                const done = completed.includes(item.slug);
                return (
                  <li key={item.slug}>
                    <Link
                      href={`/etudes/${item.slug}`}
                      className={`flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-3 transition ${
                        done ? 'border-emerald-500/30 bg-emerald-500/10' : 'hover:border-white/20 hover:bg-white/10'
                      }`}
                    >
                      <span className="text-lg font-semibold text-white">{item.number}</span>
                      <span className="space-y-1">
                        <span className="block text-sm text-white">{item.name}</span>
                        <span className="block text-[11px] uppercase text-slate-400">{item.tag}</span>
                        {done ? (
                          <span className="inline-block rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] uppercase text-emerald-300">
                            Пройдено
                          </span>
                        ) : null}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
}
