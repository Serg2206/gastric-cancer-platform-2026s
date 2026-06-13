export default function Etude5Page() {
  return (
    <article className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">
          ЭТЮД V: «Da Vinci 5: Сенсорика против слепоты»
        </h1>
        <p className="text-gray-400">
          Force Sensing, AI-сегментация границ и AR-навигация при диссекции по Киму.
        </p>
      </header>
      <section className="space-y-3">
        <h2 className="text-xl font-medium">Технологии</h2>
        <p className="leading-relaxed">
          Да Vinci 5 вносит тактильную обратную связь и дополненную реальность
          в роботизированную диссекцию. Этюд оценивает, как это влияет на
          безопасность и вероятность повреждения нервно-сосудистых пучков.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-medium">Метрики успеха</h2>
        <ul className="list-disc space-y-2 pl-5 text-gray-300">
          <li>Сила контакта 0,1–10 Н</li>
          <li>AI-сегментация границ опухоли</li>
          <li>AR-навигация в режиме реального времени</li>
        </ul>
      </section>
      <footer className="border-t border-white/10 pt-4 text-sm text-gray-400">
        Симулятор роботизированной диссекции в разработке.
      </footer>
    </article>
  );
}
