import Link from 'next/link';
import CaseStudy from '@/app/components/CaseStudy';

export const metadata = {
  title: 'ЭТЮД V: Da Vinci 5: Сенсорика против слепоты',
  description: 'Силовая обратная связь, AI-сегментация и AR-навигация при диссекции по Киму',
};

const CASE_ANSWERS = [
  {
    id: 'robotic',
    title: 'Робот Da Vinci 5 с Force Sensing и AR',
    detail: 'Используем тактильную обратную связь и навигацию для диссекции.',
    result: 'Снижаем риск повреждения нервных пучков и улучшаем идентификацию плоскостей.',
  },
  {
    id: 'laparoscopy',
    title: 'Чистая лапароскопия по Киму',
    detail: 'Отказ от робота, опора на мастерство и анатомическую визуализацию.',
    result: 'При опытном операторе эквивалентные онкологические исходы, но больше неврологических рисков у начинающих.',
  },
  {
    id: 'open',
    title: 'Лапаротомия с интраоперационной NAV',
    detail: 'Открытый доступ + ультразвуковая/AR-помощь.',
    result: 'Хорошая оценка верхнего края резекции и возможность срочного патолога, но более травматичный доступ.',
  },
  {
    id: 'hybrid',
    title: 'Гибридная тактика: лапароскопия + робот-ассист',
    detail: 'Лапароскопическая диссекция, робот для ключевого этапа.',
    result: 'Рациональный компромисс: сокращаем время и стоимость, повышаем безопасность при сложных этапах.',
  },
];

export default function EtudeFivePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-10 space-y-6">
      <div className="space-y-2">
        <div className="text-xs font-semibold uppercase tracking-widest text-slate-400">ЭТЮД V</div>
        <h1 className="text-3xl font-semibold tracking-tight">Da Vinci 5: Сенсорика против слепоты</h1>
        <p className="text-gray-400">Силовое чутьё, AI-сегментация и AR-навигация при диссекции по Киму.</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-medium">Контекст</h2>
        <p className="text-gray-300">Пациент 63 года, cT2N1M0, большой опухолевый узел у кардии.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-medium">Клинический кейс</h2>
        <CaseStudy id="etude-5" slug="etude-5" question="Какой доступ обеспечит максимум безопасности и воспроизводимости результата при сложной диссекции?" answers={CASE_ANSWERS} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-medium">Интерпретация</h2>
        <p className="text-gray-300">Force Sensing снижает риск юкляции, а AR-навигация помогает автономно идентифицировать пространства.</p>
      </section>

      <div className="flex items-center justify-between">
        <Link href="/etudes" className="rounded-md border border-white/10 px-3 py-2 text-sm text-gray-300 hover:border-white/30">Назад к списку</Link>
        <Link href="/etudes/etude-6" className="rounded-md bg-white/10 px-3 py-2 text-sm font-medium text-white hover:bg-white/15">Следующий этюд →</Link>
      </div>
    </main>
  );
}
