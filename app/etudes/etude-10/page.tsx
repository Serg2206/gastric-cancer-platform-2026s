import Link from 'next/link';
import CaseStudy from '@/app/components/CaseStudy';

export const metadata = {
  title: 'ЭТЮД X & Эпилог: Симуляционная революция и Манифест Хирурга',
  description: 'Пятиуровневый симуляционный лабиринт: VR -> Swine Lab -> Thiel-кадаверы -> Цифровые двойники',
};

const CASE_ANSWERS = [
  {
    id: 'vr',
    title: 'VR/AR-тренажёр как starting point',
    detail: 'Первоначальное обучение движению, инструментам и диагностике в симуляторе.',
    result: 'Лучшая интеллектуальная подготовка, но качество передачи тактильных ощущений остаётся ограниченным.',
  },
  {
    id: 'swine',
    title: 'Swine Lab для роботизированных навыков',
    detail: 'Тренировка роботизированного диссекционного подхода на свиных моделях.',
    result: 'Ближе всего к реальной биомеханике и управлению инструментами, но ресурсозатратно.',
  },
  {
    id: 'thiel',
    title: 'Thiel-кадаверы для hemostasis и реконструкции',
    detail: 'Мягкие ткани с живой перфузией, максимально похожи на живой организм.',
    result: 'Высокий уровень реализма. Идеально для оценки кровотечения и шовной техники.',
  },
  {
    id: 'digital',
    title: 'Цифровые двойники и предоперационное моделирование',
    detail: 'Персонализированное моделирование пациента и rehearsal операции.',
    result: 'Эмулирует индивидуальную анатомию и позволяет probть редкие сценарии. Цена и сложность интеграции пока высоки.',
  },
];

export default function EtudeTenPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-10 space-y-6">
      <div className="space-y-2">
        <div className="text-xs font-semibold uppercase tracking-widest text-slate-400">ЭТЮД X / ЭПИЛОГ</div>
        <h1 className="text-3xl font-semibold tracking-tight">Симуляционная революция и Манифест Хирурга</h1>
        <p className="text-gray-400">Пятиуровневый лабиринт симуляционного мастерства.</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-medium">Контекст</h2>
        <p className="text-gray-300">Конечная цель учебного пути — переход от «знания» к «действию» в реальной операционной. Манифест хирурга предполагает осознанность, этичность и контроль каждого шага.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-medium">Клинический кейс</h2>
        <CaseStudy id="etude-10" slug="etude-10" question="Если бы вы проектировали учебную программу абдоминального хирурга на 5 лет, какой трек вы поставите первым?" answers={CASE_ANSWERS} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-medium">Интерпретация</h2>
        <p className="text-gray-300">Симуляция — это не замена опыту, а ускоритель кривой обучения. Интеграция уровней от виртуального до цифрового двойника позволяет безопаснее входить в сложные вмешательства.</p>
      </section>

      <div className="flex items-center justify-between">
        <Link href="/etudes" className="rounded-md border border-white/10 px-3 py-2 text-sm text-gray-300 hover:border-white/30">Назад к списку</Link>
        <Link href="/etudes/etude-11" className="rounded-md bg-white/10 px-3 py-2 text-sm font-medium text-white hover:bg-white/15">Следующий этюд →</Link>
      </div>
    </main>
  );
}
