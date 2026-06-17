'use client';

import Link from 'next/link';
import { useProgress } from '../hooks/useProgress';
import { useState } from 'react';

export default function MobileMenu({ counts }: { counts: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 rounded-md border border-white/10 px-2 py-1 text-xs text-slate-300 hover:bg-white/5"
      >
        Меню
        <span className="rounded-full bg-white/10 px-1.5 py-0.5 text-[10px] text-slate-300">{counts}/12</span>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-72 rounded-md border border-white/10 bg-black/95 p-2 shadow-lg">
          <div className="space-y-2 text-sm">
            <Link href="/" onClick={() => setOpen(false)} className="block rounded-md px-2 py-1.5 hover:bg-white/5">
              Главная
            </Link>
            <Link href="/profile" onClick={() => setOpen(false)} className="block rounded-md px-2 py-1.5 hover:bg-white/5">
              Профиль
            </Link>
            <div className="border-t border-white/10 pt-2" />
            {[
              ['etude-1', 'ЭТЮД I', 'Демографический шизофрен'],
              ['etude-2', 'ЭТЮД II', 'Мультиомиксная навигация'],
              ['etude-3', 'ЭТЮД III', 'MATTERHORN и иммунотерапия'],
              ['etude-4', 'ЭТЮД IV', 'CRITICS-II'],
              ['etude-5', 'ЭТЮД V', 'Da Vinci 5'],
              ['etude-6', 'ЭТЮД VI', 'ICG-Флуоресценция'],
              ['etude-7', 'ЭТЮД VII', 'Проксимальная резекция'],
              ['etude-8', 'ЭТЮД VIII', 'OLA при cT4a'],
              ['etude-9', 'ЭТЮД IX', 'PIPAC/HIPEC'],
              ['etude-10', 'ЭТЮД X', 'Симуляционная революция'],
              ['etude-11', 'ЭТЮД XI', 'MDT 2.0'],
              ['etude-12', 'ЭТЮД XII', 'Патоморфоз как пророчество'],
            ].map(([slug, title, name]) => {
              const href = `/etudes/${slug}`;
              return (
                <Link
                  key={slug}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-md px-2 py-1.5 hover:bg-white/5"
                >
                  <span className="truncate">
                    <span className="text-[11px] text-slate-500">{title}</span>
                    <span className="ml-2 text-slate-200">{name}</span>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
