import Link from 'next/link';
import CaseStudy from '@/app/components/CaseStudy';

export const metadata = {
  title: 'ЭТЮД IV: CRITICS-II и точка возврата',
  description: 'Тотальная неоадъювантная терапия и концепция Sterilized Field',
};

const CASE_ANSWERS = [
  {
    id: 'tnt',
    title: 'Полный курс TNT ( perioperative FLOT + иммунотерапия )',
    detail: 'Современный протокол для высокорискового местно-распространённого рака.',
    result: 'Вы получаете системный контроль болезни и локальный ответ. Риск: потенциальная отсрочка хирургии и повышение perioperative toxicity.',
  },
  {
    id: 'surgery_first',
    title: 'Операция сейчас и адъювант по патоморфозу',
    detail: 'Классический expedited-подход: быстрее убираем опухоль, потом дотерапия.',
    result: 'Вы убираете опухоль быстро, но при pT4bN2M0 вы теряете окно для неоадъювантного ответа, а адъювантность часто оказывается неполной.',
  },
  {
    id: 'crt',
    title: 'Химиолучевая терапия как мост',
    detail: 'ХЛТ 45 Гр + 5-FU для достижения стерилизации ложа опухоли.',
    result: 'ХЛТ остаётся альтернативой при резидуальной опухоли, но CRITICS-II показывает: хирургическое вмешательство после полного TNT даёт лучший местный контроль.',
  },
  {
    id: 'active_surv',
    title: 'Активное наблюдение без неоадъюванта',
    detail: 'План: ранняя ревизия через 4–6 недель, только при прогрессии — интервенция.',
    result: 'Допустимо текло на очень ранних стадиях, но при cT3N1 приемлемость крайне низкая из-за риска латентных N+ и progression.',
  },
];

export default function EtudeFourPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-10 space-y-6">
      <div className="space-y-2">
        <div className="text-xs font-semibold uppercase tracking-widest text-slate-400">ЭТЮД IV</div>
        <h1 className="text-3xl font-semibold tracking-tight">CRITICS-II и точка возврата</h1>
        <p className="text-gray-400">Тотальная неоадъювантная терапия и концепция Sterilized Field.</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-medium">Контекст</h2>
        <p className="text-gray-300">Пациент 59 лет. cT3N2M0, биопсия: intestinal type, G2. У вас есть окно для усиленной неоадъюванции, но вмешательство не должно занять место хирургического лечения.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-medium">Клинический кейс</h2>
        <CaseStudy id="etude-4" slug="etude-4" question="Вы — на коллегиальном обходе. Коллеги предлагают FLOT x4 и радиохимиотерапию, но операционная бригада просит не терять пациента из виду. Какой протокол обеспечит баланс между Sterilized Field и безопасностью операции?" answers={CASE_ANSWERS} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-medium">Интерпретация</h2>
        <p className="text-gray-300">Ключевое изменение: неоадъювантная стратегия становится стандартом при высокорисковом местно-распространённом раке. Если вы планируете хирургию до стерилизации поля, вы рискуете iatrogenic диссеминацией и более высокой рецидивной нагрузкой.</p>
      </section>

      <div className="flex items-center justify-between">
        <Link href="/etudes" className="rounded-md border border-white/10 px-3 py-2 text-sm text-gray-300 hover:border-white/30">Назад к списку</Link>
        <Link href="/etudes/etude-5" className="rounded-md bg-white/10 px-3 py-2 text-sm font-medium text-white hover:bg-white/15">Следующий этюд →</Link>
      </div>
    </main>
  );
}
