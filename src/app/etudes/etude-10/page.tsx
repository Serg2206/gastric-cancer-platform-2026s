export default function Etude10Page() {
  return (
    <article className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">
          ЭТЮД X: «Симуляционная революция и Манифест Хирурга»
        </h1>
        <p className="text-gray-400">
          Пятиуровневый симуляционный лабиринт от VR до цифровых двойников.
        </p>
      </header>
      <section className="space-y-3">
        <h2 className="text-xl font-medium">Цель модуля</h2>
        <p className="leading-relaxed">
          Соединить классическое обучение с цифровыми методами и сформировать
          образ хирурга как интерпретатора биологии и данных.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-medium">Уровни симуляции</h2>
        <ul className="list-disc space-y-2 pl-5 text-gray-300">
          <li>VR-тренажёр базовых этапов</li>
          <li>Swine Lab и Thiel-кадаверы</li>
          <li>Мультимодальные цифровые двойники</li>
        </ul>
      </section>
      <footer className="border-t border-white/10 pt-4 text-sm text-gray-400">
        Музыкальная и цифровая части модуля будут расширены позже.
      </footer>
    </article>
  );
}
