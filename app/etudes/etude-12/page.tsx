import Link from 'next/link';
import CaseStudy from '@/app/components/CaseStudy';

export const metadata = {
  title: 'ЭТЮД XII: Патоморфоз как пророчество',
  description: 'Шкала Mandard TRG, irPR и TILs. Мониторинг MRD (Signatera) на 7 и 30 дни после операции',
};

const CASE_ANSWERS = [
  {
    id: 'trg',
    title: 'Mandard TRG как основной критерий',
    detail: 'Стандартная морфологическая шкала для оценки ответа.',
    result: 'Воспроизводима, но субъективна; требует стандартизированной подготовки патолога.',
  },
  {
    id: 'mrd',
    title: 'MRD-мониторинг (Signatera)',
    detail: 'Персонализированный ctDNA-тест после операции.',
    result: 'Даёт раннее предупреждение о рецидиве, но требует логистики забора и интеграции в протокол.',
  },
  {
    id: 'tils',
    title: 'Оценка TILs (tumor-infiltrating lymphocytes)',
    detail: 'Фенотипирование иммунного инфильтрата опухоли.',
    result: 'Независимый прогностический маркер. Усиливает стратификацию в MSI-H когорте.',
  },
  {
    id: 'irpr',
    title: 'irPR (immunologic pathological complete response)',
    detail: 'Гибридная оценка: морфология + иммунный профиль.',
    result: 'Сближает морфологию и биологию, но требует стандартов регистрации и центрового контроля.',
  },
];

export default function EtudeTwelvePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-10 space-y-6">
      <div className="space-y-2">
        <div className="text-xs font-semibold uppercase tracking-widest text-slate-400">ЭТЮД XII</div>
        <h1 className="text-3xl font-semibold tracking-tight">Патоморфоз как пророчество</h1>
        <p className="text-gray-400">Шкала Mandard TRG, irPR и TILs. Мониторинг MRD после операции.</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-medium">Контекст</h2>
        <p className="text-gray-300">Пациент 58 лет. Неоадъювантная иммунохимиотерапия завершена, планируется резекция. Нужна тактика оценки ответа, которая предскажет исход процедуры.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-medium">Клинический кейс</h2>
        <CaseStudy id="etude-12" slug="etude-12" question="Какой набор патоморфологических маркеров станет вашим операционным стандартом?" answers={CASE_ANSWERS} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-medium">Интерпретация</h2>
        <p className="text-gray-300">Современный патоморфолог работает как предиктор исходов, а не только как дескриптор. TRG, TILs и MRD вместе дают многомерную карту ответа.</p>
      </section>

      <div className="flex items-center justify-between">
        <Link href="/etudes" className="rounded-md border border-white/10 px-3 py-2 text-sm text-gray-300 hover:border-white/30">Назад к списку</Link>
        <Link href="/" className="rounded-md bg-white/10 px-3 py-2 text-sm font-medium text-white hover:bg-white/15">На главную</Link>
      </div>
    </main>
  );
}
