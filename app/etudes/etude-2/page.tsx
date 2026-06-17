import Link from 'next/link';
import CaseStudy from '@/app/components/CaseStudy';

export const metadata = {
  title: 'ЭТЮД II: Мультиомиксная навигация: от ctDNA к скальпелю',
  description: 'Жидкостная биопсия, ПЭТ/КТ и ветвящийся кейс',
};

const CASE_ANSWERS = [
  {
    id: 'liquid',
    title: 'CAPP-seq / ctDNA первой линией',
    detail: 'Оцениваем минимальную остаточную болезнь и молекулярный профиль опухоли до визуализации.',
    result: 'Вы получаете раннее предупреждение о системном распространении, но визуальная анатомия остаётся неясной. Риск пропустить локально-распространённый процесс при сочетании ctDNA-positive и негативной визуализации.',
  },
  {
    id: 'fapi',
    title: '⁶⁸Ga-FAPI ПЭТ/КТ сразу',
    detail: 'Фокусируемся на перфузии опухоли и микрометастазах, минуя стандартный PET-CT.',
    result: 'FAPI даёт контраст при минимальном карциноматозе, но без гистологической верификации стадия остаётся вероятностной. Может быть переоценка T-статуса.',
  },
  {
    id: 'endo',
    title: 'Эндоскопия + базовая гистология',
    detail: 'Стандартный путь: прямой осмотр + биопсия, затем принятие решения.',
    result: 'Вы стабилизируете диагноз как cT2N1, но не обнаруживаете перитонеальных и лимфатических микроочагов. Через 4 месяца — рецидив с явным cT4aN2.',
  },
  {
    id: 'combo',
    title: 'Комбинированный протокол',
    detail: 'Ждкостная биопсия + FAPI-ПЭТ/КТ синхронно, затем объединение данных.',
    result: 'Раннее обнаружение микрокариноматоза позволяет перейти от резекции к неоадъювантной стратегии. Стадия скорректирована до cT4aN2 до хирургического вмешательства.',
  },
];

export default function EtudeTwoPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-10 space-y-6">
      <div className="space-y-2">
        <div className="text-xs font-semibold uppercase tracking-widest text-slate-400">
          ЭТЮД II
        </div>
        <h1 className="text-3xl font-semibold tracking-tight">
          Мультиомиксная навигация: от ctDNA к скальпелю
        </h1>
        <p className="text-gray-400">
          Жидкостная биопсия и FAPI-ПЭТ/КТ против микроскопического карциноматоза.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-medium">Контекст</h2>
        <p className="text-gray-300">
          Пациентка 42 лет с подозрением на рак желудка. Стандартная визуализация
          показывает локальный процесс, но только комбинация молекулярного и
          функционального маркеров позволяет понять реальный риск скрытого
          распространения до операции.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-medium">Клинический кейс</h2>
        <CaseStudy
          id="etude-2"
          slug="etude-2"
          question="42 года. Жалобы на epigastric болевой синдром, умеренную анемию. Эндоскопия: подозрительная язва в антральном отделе, биопсия — аденокарцинома. Стандартная КТ: ограничивается стенкой желудка, без отдалённых метастазов. Какой следующий диагностический шаг обеспечит максимальную тактическую точность?"
          answers={CASE_ANSWERS}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-medium">Интерпретация</h2>
        <p className="text-gray-300">
          В этом модуле важно показать, как комбинация CAPP-seq и FAPI-ПЭТ/КТ
          позволяет определить истинную стадию. Выбор только одного инструмента
          часто оставляет «слепые зоны»: либо микромаcтазы не видны, либо их
          онкологический потенциал переоценён. В клинической практике
          мультиомиксный протокол сокращает количество «сложных» рецидивов
          после так называемой «радикальной» операции.
        </p>
      </section>

      <div className="flex items-center justify-between">
        <Link
          href="/etudes"
          className="rounded-md border border-white/10 px-3 py-2 text-sm text-gray-300 transition hover:border-white/30 hover:text-white"
        >
          Назад к списку
        </Link>
        <Link
          href="/etudes/etude-3"
          className="rounded-md bg-white/10 px-3 py-2 text-sm font-medium text-white transition hover:bg-white/15"
        >
          Следующий этюд →
        </Link>
      </div>
    </main>
  );
}
