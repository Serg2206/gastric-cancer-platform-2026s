import Link from 'next/link';
import CaseStudy from '@/app/components/CaseStudy';

export const metadata = {
  title: 'ЭТЮД XI: MDT 2.0: От совещания к коллективному разуму',
  description: 'Интеграция AI-решений и FHIR-протоколов в мультидисциплинарные консилиумы',
};

const CASE_ANSWERS = [
  {
    id: 'mdt',
    title: 'Стандартный мультидисциплинарный консилиум',
    detail: 'Сбор онколога, хирурга, патолога, радиолога в одном кабинете.',
    result: 'Повышает соответствие протоколам, но требует синхронизации и времени.',
  },
  {
    id: 'ai_support',
    title: 'AI-помощник в реальном времени (Watson-like)',
    detail: 'Контекстная система предлагает варианты лечения и evidence-ссылки.',
    result: 'Сокращает время на синтез, но качество ответа зависит от данных, на которых обучена модель.',
  },
  {
    id: 'fhir',
    title: 'FHIR-интеграция для структурного обмена данными',
    detail: 'Стандартизированное представление пациента, имперсональный контекст.',
    result: 'Даёт воспроизводимость и связность, но требует зрелой IT-инфраструктуры.',
  },
  {
    id: 'async',
    title: 'Асинхронный цифровой протокол',
    detail: 'Видео-/текст-обсуждение без синхронного присутствия всех участников.',
    result: 'Гибкая доступность, но скорость принятия решения падает при отсутствии live-диалога.',
  },
];

export default function EtudeElevenPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-10 space-y-6">
      <div className="space-y-2">
        <div className="text-xs font-semibold uppercase tracking-widest text-slate-400">ЭТЮД XI</div>
        <h1 className="text-3xl font-semibold tracking-tight">MDT 2.0: От совещания к коллективному разуму</h1>
        <p className="text-gray-400">AI-решения и FHIR-протоколы в консилиумах.</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-medium">Контекст</h2>
        <p className="text-gray-300">Проблема MDT: сложность квотирования времени, несовместимость систем и субъективизм отдельных голосов.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-medium">Клинический кейс</h2>
        <CaseStudy id="etude-11" slug="etude-11" question="Какой формат консилиума даст наилучший компромисс между скоростью, точностью и вовлечённостью?" answers={CASE_ANSWERS} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-medium">Интерпретация</h2>
        <p className="text-gray-300">AI не заменяет консилиум, но становится расширением коллективного интеллекта: ускоряет поиск evidence, структурирует риски.</p>
      </section>

      <div className="flex items-center justify-between">
        <Link href="/etudes" className="rounded-md border border-white/10 px-3 py-2 text-sm text-gray-300 hover:border-white/30">Назад к списку</Link>
        <Link href="/etudes/etude-12" className="rounded-md bg-white/10 px-3 py-2 text-sm font-medium text-white hover:bg-white/15">Следующий этюд →</Link>
      </div>
    </main>
  );
}
