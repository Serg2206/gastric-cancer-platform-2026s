'use client';

import { useEffect, useMemo, useState } from 'react';
import { useProgress } from '@/hooks/useProgress';

export type CaseAnswer = {
  id: string;
  title: string;
  detail: string;
  result: string;
};

type CaseStudyProps = {
  slug: string;
  question: string;
  answers: CaseAnswer[];
  id?: string;
};

export default function CaseStudy({ slug, question, answers, id }: CaseStudyProps) {
  const { markCompleted, completed, markVisited } = useProgress();
  const [selected, setSelected] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const done = completed.includes(slug);

  const selectedAnswer = useMemo(
    () => answers.find((answer) => answer.id === selected) ?? null,
    [selected, answers]
  );

  useEffect(() => {
    markVisited(slug);
  }, [slug, markVisited]);

  return (
    <div className="rounded-lg border border-white/10 bg-white/5 p-4 space-y-4">
      <p className="text-gray-300">{question}</p>

      <div className="grid gap-3 sm:grid-cols-2">
        {answers.map((answer) => {
          const isActive = selected === answer.id;
          return (
            <label
              key={answer.id}
              className={`flex cursor-pointer flex-col gap-2 rounded-lg border p-3 transition ${
                isActive
                  ? 'border-white/40 bg-white/10'
                  : 'border-white/10 hover:border-white/30 active:border-white/40'
              }`}
            >
              <span className="text-sm font-medium text-white">{answer.title}</span>
              <span className="text-xs text-gray-400">{answer.detail}</span>
              <input
                id={`${id ?? slug}-${answer.id}`}
                type="radio"
                name={slug}
                className="sr-only"
                value={answer.id}
                checked={isActive}
                onChange={() => {
                  setSelected(answer.id);
                  setRevealed(false);
                }}
              />
            </label>
          );
        })}
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => setRevealed((current) => !current)}
          className="rounded-md border border-white/10 px-3 py-2 text-sm text-gray-200 transition hover:border-white/30 hover:text-white"
        >
          {revealed ? 'Скрыть объяснение' : 'Показать объяснение'}
        </button>

        <button
          type="button"
          onClick={() => markCompleted(slug)}
          className="rounded-md bg-emerald-500/20 px-3 py-2 text-sm font-medium text-emerald-200 transition hover:bg-emerald-500/25"
        >
          {done ? 'Модуль завершён ✓' : 'Отметить как пройденный'}
        </button>
      </div>

      {revealed && selectedAnswer ? (
        <div className="space-y-2 rounded-md border border-white/10 bg-black/20 p-3">
          <div className="text-sm font-medium text-white">Объяснение</div>
          <p className="text-sm text-gray-300">{selectedAnswer.result}</p>
        </div>
      ) : null}
    </div>
  );
}
