import Link from 'next/link';
import CaseStudy from '@/app/components/CaseStudy';

export const metadata = {
  title: 'ЭТЮД VII: Проксимальная резекция с DTR',
  description: 'Органосохранение при аденокарциноме GEJ Siewert II и Double Tract Reconstruction',
};

const CASE_ANSWERS = [
  {
    id: 'dtr',
    title: 'Проксимальная резекция + Double Tract Reconstruction',
    detail: 'Сохраняем часть желудка, соединяем пищевод и кишки двойным анастомозом.',
    result: 'Лучшее качество жизни: меньше рефлюкса, меньшие потери массы. Но техника сложная и требует строгого соблюдения онкологических границ.',
  },
  {
    id: 'total',
    title: 'Полная гастрэктомия с Roux-en-Y',
    detail: 'Убираем весь желудок, стандартная реконструкция.',
    result: 'Онкологически безопасно, но качество жизни падает: сильный рефлюкс, дефицит витаминов B12/железа.',
  },
  {
    id: 'esop',
    title: 'Эзофагэктомия с торакальным доступом',
    detail: 'Углубляем резекцию в пищевод для более широких краёв.',
    result: 'Более радикально, но выше операционная летальность и лёгочные осложнения.',
  },
  {
    id: 'endo',
    title: 'Эндоскопическая резекция (EMR/ESD)',
    detail: 'Органосохранение через слизистую.',
    result: 'Минимально invasive, но для cT2 стадии риск подслизистой инвазии слишком высок.',
  },
];

export default function EtudeSevenPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-10 space-y-6">
      <div className="space-y-2">
        <div className="text-xs font-semibold uppercase tracking-widest text-slate-400">ЭТЮД VII</div>
        <h1 className="text-3xl font-semibold tracking-tight">Проксимальная резекция с DTR</h1>
        <p className="text-gray-400">Органосохранение при аденокарциноме GEJ Siewert II и Double Tract Reconstruction.</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-medium">Контекст</h2>
        <p className="text-gray-300">Пациентка 54 года. Аденокарцинома GEJ по Siewert II. Приоритет — онкологическая безопасность без полной гастрэктомии.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-medium">Клинический кейс</h2>
        <CaseStudy id="etude-7" slug="etude-7" question="Какая реконструкция обеспечит баланс между радикальностью и качеством жизни?" answers={CASE_ANSWERS} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-medium">Интерпретация</h2>
        <p className="text-gray-300">Двойная реконструкция сохраняет депо желчи и частично — резервуарную функцию. Это важно для энтерального питания и метаболизма.</p>
      </section>

      <div className="flex items-center justify-between">
        <Link href="/etudes" className="rounded-md border border-white/10 px-3 py-2 text-sm text-gray-300 hover:border-white/30">Назад к списку</Link>
        <Link href="/etudes/etude-8" className="rounded-md bg-white/10 px-3 py-2 text-sm font-medium text-white hover:bg-white/15">Следующий этюд →</Link>
      </div>
    </main>
  );
}
