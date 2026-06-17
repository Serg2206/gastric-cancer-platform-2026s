import Link from 'next/link';
import CaseStudy from '@/app/components/CaseStudy';

export const metadata = {
  title: 'ЭТЮД IX: PIPAC и HIPEC: Химия под давлением',
  description: 'Аэрозольная химиотерапия при перитонеальном карциноматозе и CRS',
};

const CASE_ANSWERS = [
  {
    id: 'pipac',
    title: 'PIPAC (Pressure-controlled Intraperitoneal Aerosolized Chemotherapy)',
    detail: 'Минимизированная системная абсорбция при глубоком аэрозольном покрытии.',
    result: 'Подходит как этапная терапия при PCI ≤ 20, но требует критериев резекции.',
  },
  {
    id: 'hipec',
    title: 'HIPEC при CRS',
    detail: 'Полная циторедукция + гипертермическая химиотерапия.',
    result: 'Самый мощный локальный эффект, но высокая morbidity при PCI > 15.',
  },
  {
    id: 'systemic',
    title: 'Системная иммунохимиотерапия как мост',
    detail: 'Иммунотерапия + таргетная химия для снижения карциноматоза.',
    result: 'Может замедлить прогрессию, но без циторедукции вы не контролируете эндоперитонеальную нагрузку.',
  },
  {
    id: 'bsc',
    title: 'Лучшая поддерживающая терапия (BSC)',
    detail: 'Симптоматический уход без агрессивных вмешательств.',
    result: 'Допустимо при декомпенсации и высоком PCI. Но при стабильном статусе это отказ от онкологического шанса.',
  },
];

export default function EtudeNinePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-10 space-y-6">
      <div className="space-y-2">
        <div className="text-xs font-semibold uppercase tracking-widest text-slate-400">ЭТЮД IX</div>
        <h1 className="text-3xl font-semibold tracking-tight">PIPAC и HIPEC: Химия под давлением</h1>
        <p className="text-gray-400">Аэрозольная химиотерапия при перитонеальном карциноматозе и CRS.</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-medium">Контекст</h2>
        <p className="text-gray-300">Пациентка 49 лет. Стойкий перитонеальный карциноматоз после первичной гастрэктомии. Состояние стабильное. PCI требуется уточнить.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-medium">Клинический кейс</h2>
        <CaseStudy id="etude-9" slug="etude-9" question="Какой локопротективный метод даст максимальный онкологический ответ при минимальном риске?" answers={CASE_ANSWERS} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-medium">Интерпретация</h2>
        <p className="text-gray-300">PIPAC решает задачу локальной доставки при минимальной системной токсичности. На этой основе часто строятся многоэтапные протоколы до CRS.</p>
      </section>

      <div className="flex items-center justify-between">
        <Link href="/etudes" className="rounded-md border border-white/10 px-3 py-2 text-sm text-gray-300 hover:border-white/30">Назад к списку</Link>
        <Link href="/etudes/etude-10" className="rounded-md bg-white/10 px-3 py-2 text-sm font-medium text-white hover:bg-white/15">Следующий этюд →</Link>
      </div>
    </main>
  );
}
