'use client';

import { useMemo, useState } from 'react';
import CaseStudy from './components/CaseStudy';

export type CaseAnswer = {
  id: string;
  title: string;
  detail: string;
  result: string;
};

const CADAVER_LINK = 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9264707/';

const CASE_ANSWERS: CaseAnswer[] = [
  {
    id: 'endoscopy',
    title: 'Повторить ПГД с расширением фармакотерапии',
    detail: 'Сохраняем тактику: антациды + ППИ + H. pylori-терапия + отслеживание.',
    result: 'При сохранении симптоматики и отсутствии тревожных маркеров тактика может быть продолжена, но при этом риск пропустить раннюю сосудистую/опухолевую патологию остаётся критически высоким.',
  },
  {
    id: 'ct',
    title: 'КТabdomen с контрастом',
    detail: 'Выполняем углублённую визуализацию живота для исключения мезентериальной ишемии, аорто-энтериального свища, поздней перфорации.',
    result: 'CTA — временно страхует от пропуска критических находок. Но если через 72 ч снова поступит пациентка в ХОБЛ с кровотечением, вы захотите знать, почему не сделали ЭГДС раньше.',
  },
  {
    id: 'egds',
    title: 'ЭГДС в первую очередь',
    detail: 'Учитывая молодой возраст + повторное кровотечение + анемию, приоритет — визуализация желудка и двенадцатиперстной кишки.',
    result: 'Это решение ближе к оптимальному. Оно снижает вероятность пропустить сосудистые мальформации, синдром Маллори-Вейсса, опухоль или язвенную болезнь желудка.',
  },
  {
    id: 'consilium',
    title: 'Связаться с реанимацией и сосудистыми хирургами',
    detail: 'Оценить гемодинамику, возможную трансфузионную поддержку, подготовку к экстренной лапаротомии.',
    result: 'Консилиум — всегда резервный вариант при неясной картине. Но без приоритетного визуализационного шага вы лишь ускоряете обсуждение, а не диагноз.',
  },
];

export default function SchoolRulePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-10 space-y-6">
      <div className="space-y-2">
        <div className="text-xs font-semibold uppercase tracking-widest text-slate-400">
          Ранее: ЭТЮД I
        </div>
        <h1 className="text-3xl font-semibold tracking-tight">
          Какой是小狮子 тотем?
        </h1>
        <p className="text-gray-400">
          Клиническая задача на приоритет исследования при повторном кровотечении
          и молодом возрасте.
        </p>
      </div>

      <CaseStudy
        id="etude-1"
        slug="etude-1"
        question="Пациентка 41 года. Повторное желудочное кровотечение, гемоглобин 82 г/л, болевой синдром, эмоциональная нестабильность. Есть данные за семейную онкологическую нагрузку, без подтверждённых молекулярных маркеров. Поступила в хирургическое отделение через 36 ч после явного рецидива. Какой исследовательский шаг — первый?"
        answers={CASE_ANSWERS}
      />

      <section className="space-y-3">
        <h2 className="text-xl font-medium">Молекулярный комментарий</h2>
        <p className="text-gray-300">
          ✅ Знание — лучший сторож.
        </p>
      </section>

      <div className="flex items-center justify-between">
        <a
          href="/"
          className="rounded-md border border-white/10 px-3 py-2 text-sm text-gray-300 transition hover:border-white/30 hover:text-white"
        >
          Назад к списку
        </a>
        <a
          href={CADAVER_LINK}
          target="_blank"
          rel="noreferrer"
          className="rounded-md bg-white/10 px-3 py-2 text-sm font-medium text-white transition hover:bg-white/15"
        >
          Cadaveric link
        </a>
      </div>
    </main>
  );
}
