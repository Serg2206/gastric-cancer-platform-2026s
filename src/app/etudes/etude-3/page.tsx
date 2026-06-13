export default function Etude3Page() {
  return (
    <article className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">
          ЭТЮД III: «Протокол MATTERHORN и Новая Эра Иммунотерапии»
        </h1>
        <p className="text-gray-400">
          Чекпойнт-ингибиторы, стратификация по MSI-H/dMMR и PD-L1 CPS.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-medium">Почему это важно сейчас</h2>
        <p className="leading-relaxed">
          Неоадъювантная химиоиммунотерапия меняет границы резекции.
          Этюд показывает, как выбрать пациентов и как интерпретировать
          патоморфологический ответ.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-medium">Ключевые маркеры</h2>
        <ul className="list-disc space-y-2 pl-5 text-gray-300">
          <li>MSI-H / dMMR</li>
          <li>PD-L1 Combined Positive Score</li>
          <li>Генетические профили для подбора терапии</li>
        </ul>
      </section>

      <footer className="border-t border-white/10 pt-4 text-sm text-gray-400">
        Интерактивный алгоритм выбора терапии появится позже.
      </footer>
    </article>
  );
}
