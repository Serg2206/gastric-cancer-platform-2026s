'use client';

import Link from 'next/link';
import CaseStudy from './components/CaseStudy';

export type CaseAnswer = {
  id: string;
  title: string;
  detail: string;
  result: string;
};

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

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 space-y-10">
      <section className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight text-white">
            Проф. СУШКОВ Сергей Валентинович
          </h1>
          <p className="text-lg text-gray-300">
            Хирург, онкохирург, научный руководитель МЦ «МАРИЯ». Харьков, ул. Сирохинская 7-б.
          </p>
          <p className="text-gray-400">
            Бесплатная часть: работа профессора в МЦ «МАРИЯ», образовательная платформа по хирургии рака желудка,
            кейсы, научные материалы.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/etudes"
              className="rounded-md bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/15"
            >
              Образовательная платформа
            </Link>
            <Link
              href="/professor"
              className="rounded-md border border-white/10 px-4 py-2 text-sm text-gray-300 transition hover:border-white/30 hover:text-white"
            >
              Научно-практическая работа профессора
            </Link>
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-5 space-y-3">
          <h2 className="text-xl font-medium">Медицинский центр «МАРИЯ»</h2>
          <p className="text-gray-300">
            Мини-инвазивная гинекология, абдоминальная хирургия, онкохирургия и неотложная помощь.
          </p>
          <div className="space-y-2 text-sm text-gray-400">
            <p>📍 Харьков, ул. Сирохинская 7-б</p>
            <p>📞 +380 96 501 52 28</p>
            <p>✉️ ssvnauka@gmail.com</p>
          </div>
          <Link
            href="https://ssvnauka.com"
            className="inline-flex rounded-md border border-white/10 px-3 py-2 text-sm text-gray-300 transition hover:border-white/30 hover:text-white"
          >
            Официальный сайт МЦ «МАРИЯ»
          </Link>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-white/5 p-5 space-y-3">
          <h2 className="text-xl font-medium">Образовательная платформа</h2>
          <p className="text-gray-300">
            12 интерактивных модулей по хирургии рака желудка: клинические кейсы, протоколы, разборы, прогресс.
          </p>
          <Link
            href="/etudes"
            className="inline-flex rounded-md bg-white/10 px-3 py-2 text-sm font-medium text-white transition hover:bg-white/15"
          >
            Перейти к модулям
          </Link>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-5 space-y-3">
          <h2 className="text-xl font-medium">Научно-практическая работа профессора</h2>
          <p className="text-gray-300">
            Дополнительные продукты: углублённые курсы, менторство, корпоративные программы, авторские методики.
          </p>
          <Link
            href="/professor"
            className="inline-flex rounded-md border border-white/10 px-3 py-2 text-sm text-gray-300 transition hover:border-white/30 hover:text-white"
          >
            Открыть раздел профессора
          </Link>
        </div>
      </section>

      <section>
        <CaseStudy
          id="sample-case"
          slug="sample-case"
          question="Пациентка 41 года. Повторное желудочное кровотечение, гемоглобин 82 г/л, болевой синдром, эмоциональная нестабильность. Есть данные за семейную онкологическую нагрузку, без подтверждённых молекулярных маркеров. Поступила в хирургическое отделение через 36 ч после явного рецидива. Какой исследовательский шаг — первый?"
          answers={CASE_ANSWERS}
        />
      </section>
    </main>
  );
}
