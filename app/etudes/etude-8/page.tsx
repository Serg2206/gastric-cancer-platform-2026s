import Link from 'next/link';
import CaseStudy from '@/app/components/CaseStudy';

export const metadata = {
  title: 'ЭТЮД VIII: Аутермост-слойный доступ (OLA) при cT4a',
  description: 'Бескровные пространства (Avascular Plane) по данным RCT UMC-UPPERGI-01 (2025)',
};

const CASE_ANSWERS = [
  {
    id: 'ola',
    title: 'Полный аутермост-слойный доступ (OLA)',
    detail: 'Наружная мобилизация с разложением avascular-плоскостей.',
    result: 'Снижаем кровопотерю и зону диссекции, но увеличиваем время операции.',
  },
  {
    id: 'standard',
    title: 'Стандартная D2-гастрэктомия с ранним пересечением',
    detail: 'Следование классическому алгоритму Ki-стдий.',
    result: 'Выдерживаем онкологические принципы, но при cT4a plane может быть инвазивна раньше.',
  },
  {
    id: 'neoadj_delay',
    title: 'Отложить операцию и повторить рестадирование',
    detail: 'Неоадъювантная терапия уже проведена; повторная оценка перед вмешательством.',
    result: 'Вы даёте опухолевой ткани погибнуть, но теряете иммунную компетенцию пациента.',
  },
  {
    id: 'limited',
    title: 'Паллиативный без奖品 резекции',
    detail: 'По типу Gastrojejunostomy или EB-Tube, без радикальности.',
    result: 'Качество жизни краткосрочно лучше, но онкологический исход разрушается.',
  },
];

export default function EtudeEightPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-10 space-y-6">
      <div className="space-y-2">
        <div className="text-xs font-semibold uppercase tracking-widest text-slate-400">ЭТЮД VIII</div>
        <h1 className="text-3xl font-semibold tracking-tight">Аутермост-слойный доступ (OLA) при cT4a</h1>
        <p className="text-gray-400">Avascular Plane диссекция по RCT UMC-UPPERGI-01 (2025).</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-medium">Контекст</h2>
        <p className="text-gray-300">Пациент 65 лет. cT4aN1M0, антральный отдел. Высокий риск диссекции при слиянии с поджелудочной железой.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-medium">Клинический кейс</h2>
        <CaseStudy id="etude-8" slug="etude-8" question="Какой доступ даст максимальную R0 без травмы поджелудочной железы?" answers={CASE_ANSWERS} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-medium">Интерпретация</h2>
        <p className="text-gray-300">Аутермост-слойный доступ означает управление аваскулярными пространствами и может стать стандартом для сложных резекций.</p>
      </section>

      <div className="flex items-center justify-between">
        <Link href="/etudes" className="rounded-md border border-white/10 px-3 py-2 text-sm text-gray-300 hover:border-white/30">Назад к списку</Link>
        <Link href="/etudes/etude-9" className="rounded-md bg-white/10 px-3 py-2 text-sm font-medium text-white hover:bg-white/15">Следующий этюд →</Link>
      </div>
    </main>
  );
}
