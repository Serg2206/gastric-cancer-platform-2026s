export default function Etude6Page() {
  return (
    <article className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">
          ЭТЮД VI: «ICG-Флуоресценция: Зелёный свет в тумане войны»
        </h1>
        <p className="text-gray-400">
          Лимфокартирование и количественная оценка перфузии анастомоза FLOW 800.
        </p>
      </header>
      <section className="space-y-3">
        <h2 className="text-xl font-medium">Цель этюда</h2>
        <p className="leading-relaxed">
          Снизить частоту послеоперационных осложнений за счёт навигации
          по лимфатическим узлам и объективной оценки перфузии.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-medium">Что будет в симуляторе</h2>
        <ul className="list-disc space-y-2 pl-5 text-gray-300">
          <li>Количественный анализ ICG-сигнала</li>
          <li>Выбор уровня кишечного шва</li>
          <li>Прогноз риска несостоятельности анастомоза</li>
        </ul>
      </section>
      <footer className="border-t border-white/10 pt-4 text-sm text-gray-400">
        Симуляция станет доступна после подключения backend.
      </footer>
    </article>
  );
}
