'use client';

import Link from 'next/link';

export default function ProfessorPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10 space-y-8">
      <div className="grid gap-6 md:grid-cols-3">
        <div className="space-y-4">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <div className="aspect-[3/4] bg-gradient-to-b from-slate-900 to-slate-800">
              <div className="flex h-full items-center justify-center text-6xl font-semibold text-white/90">СС</div>
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold tracking-tight">Проф. Сухов Сергей Викторович</h1>
            <p className="text-gray-400">Хирург, онкохирург, научный руководитель МЦ «МАРИЯ» (Харьков)</p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/etudes"
                className="rounded-md bg-white/10 px-3 py-2 text-sm font-medium text-white transition hover:bg-white/15"
              >
                Открыть образовательную платформу
              </Link>
              <a
                href="https://ssvnauka.com"
                className="rounded-md border border-white/10 px-3 py-2 text-sm text-gray-300 transition hover:border-white/30 hover:text-white"
              >
                Медицинский центр «МАРИЯ»
              </a>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 space-y-6">
          <section className="rounded-xl border border-white/10 bg-white/5 p-5 space-y-3">
            <h2 className="text-xl font-medium">Научно-практический профиль</h2>
            <p className="text-gray-300">
              Профессор Сухов сосредоточен на доказательной онкохирургии желудка, внедрении молекулярной
              стратификации (CDH1, MSI-H/dMMR, PD-L1) и интегрированных протоколов лечения.
              Его школа объединяет клинические кейсы МЦ «МАРИЯ» с образовательной платформой, где каждый
              модуль связан с реальными пациентами и протоколами.
            </p>
          </section>

          <section className="rounded-xl border border-white/10 bg-white/5 p-5 space-y-3">
            <h2 className="text-xl font-medium">Научная база и направления</h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                'YOGC и молекулярная онкология желудка',
                'Неоадъювантная и адъювантная терапия (FLOT, MATTERHORN)',
                'Мини-инвазивная хирургия и Da Vinci',
                'Лапароскопическая и ICG-флуоресцентная визуализация',
                'Междисциплинарные tumour boards (MDT 2.0)',
                'Симуляционное обучение и безопасность хирурга',
                'Протоколы PIPAC/HIPEC',
                'Патологическая анатомия и прогностические модели',
              ].map((item) => (
                <li key={item} className="rounded-lg border border-white/10 p-3 text-sm text-gray-300">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl border border-white/10 bg-white/5 p-5 space-y-3">
            <h2 className="text-xl font-medium">Контакты и запись</h2>
            <p className="text-gray-300">
              Для запросов на консультации, лекции, партнёрство или обучение бригад:
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+380965015228"
                className="rounded-md border border-white/10 px-3 py-2 text-sm text-gray-300 transition hover:border-white/30 hover:text-white"
              >
                +380 96 501 52 28
              </a>
              <a
                href="mailto:ssvnauka@gmail.com"
                className="rounded-md border border-white/10 px-3 py-2 text-sm text-gray-300 transition hover:border-white/30 hover:text-white"
              >
                ssvnauka@gmail.com
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
