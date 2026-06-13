export default function Etude9Page() {
  return (
    <article className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">
          ЭТЮД IX: «PIPAC и HIPEC: Химия под давлением»
        </h1>
        <p className="text-gray-400">
          Аэрозольная химиотерапия при перитонеальном карциноматозе.
        </p>
      </header>
      <section className="space-y-3">
        <h2 className="text-xl font-medium">Клинический контекст</h2>
        <p className="leading-relaxed">
          Этюд объясняет, когда PIPAC уместен, как оценить ответ,
          и как принять решение о CRS.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-medium">Что будет в курсе</h2>
        <ul className="list-disc space-y-2 pl-5 text-gray-300">
          <li>Стратификация по PCI</li>
          <li>Выбор циторедуктивной резекции</li>
          <li>Сравнение HIPEC и PIPAC</li>
        </ul>
      </section>
      <footer className="border-t border-white/10 pt-4 text-sm text-gray-400">
        Интерактивный протокол в разработке.
      </footer>
    </article>
  );
}
