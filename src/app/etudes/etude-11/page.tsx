export default function Etude11Page() {
  return (
    <article className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">
          ЭТЮД XI: «MDT 2.0: От совещания к коллективному разуму»
        </h1>
        <p className="text-gray-400">
          AI-решения и FHIR-протоколы в мультидисциплинарных консилиумах.
        </p>
      </header>
      <section className="space-y-3">
        <h2 className="text-xl font-medium">Современный консилиум</h2>
        <p className="leading-relaxed">
          Этюд показывает, как AI может агрегировать evidence и превращать
          разрозненные данные в единый план лечения.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-medium">Фокус</h2>
        <ul className="list-disc space-y-2 pl-5 text-gray-300">
          <li>Интеграция Watson for Oncology в MDT</li>
          <li>Стандартизация через FHIR-протоколы</li>
          <li>Оценка комплаенса рекомендациям</li>
        </ul>
      </section>
      <footer className="border-t border-white/10 pt-4 text-sm text-gray-400">
        Протокол консилиума и воронка пациентов появятся позже.
      </footer>
    </article>
  );
}
