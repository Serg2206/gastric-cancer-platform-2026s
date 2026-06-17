import Link from 'next/link';
import CaseStudy from '@/app/components/CaseStudy';

export const metadata = {
  title: 'ЭТЮД III: Протокол MATTERHORN и Новая Эра Иммунотерапии',
  description: 'Чекпойнт-ингибиторы, стратификация по MSI-H/dMMR и PD-L1 CPS',
};

const CASE_ANSWERS = [
  {
    id: 'neoadjuvant_immuno',
    title: 'Неоадъювантная иммунохимиотерапия по протоколу MATTERHORN',
    detail: 'Дурвалумаб + химиотерапия перед хирургическим вмешательством.',
    result: 'Вы повышаете вероятность достижения pCR и снижаете риск системного рецидивирования. Выбор корректен только при подтверждённом dMMR/MSI-H или высоком CPS.',
  },
  {
    id: 'surgery_first',
    title: 'Первичная хирургия с адъювантной терапией',
    detail: 'Выполняем резекцию быстро, потом планируем лечение по патоморфозу.',
    result: 'Тактика допустима при cT2N0 и отсутствии высокорисковых маркеров, но при прогрессии вы теряете окно для ответа на иммунотерапию до хирургического вмешательства.',
  },
  {
    id: 'adjuvant_only',
    title: 'Только адъювантная химиотерапия без иммунотерапии',
    detail: 'Классическая FLOT-стратегия без чекпойнт-ингибиторов.',
    result: 'FLOT остаётся стандартом в большинстве случаев, но в группе MSI-H добавление иммунотерапии даёт дополнительный выигрыш в безрецидивной выживаемости.',
  },
  {
    id: 'watchful',
    title: 'Интенсивный мониторинг без неоадъюванта',
    detail: 'План: динамическое наблюдение, КТ/ПЭТ и раннее вмешательство.',
    result: 'Наблюдение приемлемо, если стадия низкая и нет высокорисковых молекулярных маркеров. При прогрессии окно для органосохранения закрывается.',
  },
];

export default function EtudeThreePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-10 space-y-6">
      <div className="space-y-2">
        <div className="text-xs font-semibold uppercase tracking-widest text-slate-400">
          ЭТЮД III
        </div>
        <h1 className="text-3xl font-semibold tracking-tight">
          Протокол MATTERHORN и Новая Эра Иммунотерапии
        </h1>
        <p className="text-gray-400">
          Стратификация по MSI-H/dMMR и PD-L1 CPS при ране желудка.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-medium">Контекст</h2>
        <p className="text-gray-300">
          Пациентка 52 года. Аденокарцинома желудка, биопсия:G3, стадия
          cT3N1M0. Иммуногистохимия: dMMR, PD-L1 CPS=15. Нет отдалённых
          метастазов. Как изменится выбранная стратегия в сравнении с
          MSS-профилем?
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-medium">Клинический кейс</h2>
        <CaseStudy
          id="etude-3"
          slug="etude-3"
          question="Вы делаете операбельный рак желудка, и этот случай стал для вас сигналом пересмотра привычного протокола FLOT. Какая первичная тактика наиболее обоснована при данных маркерах?"
          answers={CASE_ANSWERS}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-medium">Интерпретация</h2>
        <p className="text-gray-300">
          При dMMR/MSI-H ответ на иммунотерапию выше, чем при MSS, а
          высокий CPS усиливает этот эффект. Современные данные показывают,
          что в подобной ситуации логично рассмотреть неоадъювантную
          иммунохимиотерапию, если центр имеет опыт сопровождения toxicity и
          assessment response.
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
          href="/etudes/etude-4"
          className="rounded-md bg-white/10 px-3 py-2 text-sm font-medium text-white transition hover:bg-white/15"
        >
          Следующий этюд →
        </Link>
      </div>
    </main>
  );
}
