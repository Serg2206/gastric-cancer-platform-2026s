'use client';

import Link from 'next/link';
import { useProgress } from '../../hooks/useProgress';

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

export default function SiteNav() {
  const { completed, percent } = useProgress();

  return (
    <nav className="space-y-4 text-sm">
      <div className="flex items-center justify-between">
        <div className="text-xs font-semibold uppercase tracking-widest text-slate-400">
          Прогресс
        </div>
        <span className="text-[11px] text-slate-400">{percent}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-emerald-400 transition-all"
          style={{ width: `${percent}%` }}
        />
      </div>
      <div className="text-[11px] text-slate-500">
        Пройдено {completed.length} / {etudes.length}
      </div>

      <div className="flex flex-col gap-1">
        <Link href="/" className="flex items-center gap-2 rounded-md px-2 py-1 transition hover:bg-white/5">
          <span className="text-[11px] uppercase text-slate-500">Главная</span>
          <span className="truncate text-slate-300">Платформа</span>
        </Link>
        <Link href="/profile" className="flex items-center gap-2 rounded-md px-2 py-1 transition hover:bg-white/5">
          <span className="text-[11px] uppercase text-slate-500">Профиль</span>
          <span className="truncate text-slate-300">Дашборд</span>
        </Link>
        <Link href="/ai-tutor" className="flex items-center gap-2 rounded-md px-2 py-1 transition hover:bg-white/5">
          <span className="text-[11px] uppercase text-slate-500">AI</span>
          <span className="truncate text-slate-300">Тьютор</span>
        </Link>
      </div>

      <div className="space-y-2">
        <div className="text-xs font-semibold uppercase tracking-widest text-slate-500">Модули</div>
        <ul className="space-y-1">
          {etudes.map((item) => {
            const done = completed.includes(item.slug);
            return (
              <li key={item.slug}>
                <Link
                  href={`/etudes/${item.slug}`}
                  className={`flex items-center gap-3 rounded-md px-2 py-1.5 transition ${
                    done ? 'border border-emerald-500/30 bg-emerald-500/10 text-emerald-100' : 'border border-transparent text-slate-300 hover:border-white/10 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span className="text-[11px] text-slate-500">{item.title}</span>
                  <span className="truncate">{item.name}</span>
                  <span className="ml-auto text-[10px] uppercase">{done ? '✓' : '→'}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
