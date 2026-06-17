import Link from 'next/link';
import CaseStudy from '@/app/components/CaseStudy';

export const metadata = {
  title: 'ЭТЮД VI: ICG-Флуоресценция: Зелёный свет в тумане войны',
  description: 'Лимфокартирование и количественная оценка перфузии анастомоза FLOW 800',
};

const CASE_ANSWERS = [
  {
    id: 'icg',
    title: 'ICG-флуоресценция для анастомоза и лимфоузлов',
    detail: 'Оценка перфузии и паттерна лимфодренажа.',
    result: 'Снижаем риск анастомозных осложнений и даём объективный критерий резецирования.',
  },
  {
    id: 'indocyanine',
    title: 'Проведение окрашивающих лимфоузлов',
    detail: 'Фокусируемся на первых Station N узлах в реальном времени.',
    result: 'Вы получаете более точное N-статусирование без расширения предела диссекции.',
  },
  {
    id: 'double_staple',
    title: 'Двухрядный стэйpler + ручная концы-то-конец',
    detail: 'Классическая надёжная реконструкция без флуоресценции.',
    result: 'Качественный анастомоз, но вы оставляете за скобками оценку перфузии через SLIC-технику.',
  },
  {
    id: 'flap_check',
    title: 'Интраоперационный тест на герметичность и проходимость',
    detail: 'Air leak test + инсуффляция красителя.',
    result: 'Повышает безопасность, но только сочетание перфузии+лимфоузлов даёт прогностический смысл.',
  },
];

export default function EtudeSixPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-10 space-y-6">
      <div className="space-y-2">
        <div className="text-xs font-semibold uppercase tracking-widest text-slate-400">ЭТЮД VI</div>
        <h1 className="text-3xl font-semibold tracking-tight">ICG-Флуоресценция: Зелёный свет в тумане войны</h1>
        <p className="text-gray-400">Лимфокартирование и FLOW 800-оценка перфузии анастомоза.</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-medium">Контекст</h2>
        <p className="text-gray-300">Пациентка 57 лет. План: лапароскопическая гастрэктомия с D2. Риск анастомоза и диссекции требует объективного критерия безопасности.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-medium">Клинический кейс</h2>
        <CaseStudy id="etude-6" slug="etude-6" question="Какой технологический выбор минимизирует риск утечки и нераспознанного лимфогенного распространения?" answers={CASE_ANSWERS} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-medium">Интерпретация</h2>
        <p className="text-gray-300">FLOW 800 превращает субъективную оценку цвета в количественный параметр и формирует объективный критерий отсечения.</p>
      </section>

      <div className="flex items-center justify-between">
        <Link href="/etudes" className="rounded-md border border-white/10 px-3 py-2 text-sm text-gray-300 hover:border-white/30">Назад к списку</Link>
        <Link href="/etudes/etude-7" className="rounded-md bg-white/10 px-3 py-2 text-sm font-medium text-white hover:bg-white/15">Следующий этюд →</Link>
      </div>
    </main>
  );
}
