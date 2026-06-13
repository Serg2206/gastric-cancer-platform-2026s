export default function Etude2Page() {
  return (
    <article className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">
          ЭТЮД II: «Мультиомиксная навигация: от ctDNA к скальпелю»
        </h1>
        <p className="text-gray-400">
          Жидкостная биопсия, ПЭТ/КТ с ⁶⁸Ga-FAPI и ветвящийся кейс.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-medium">Стратегия решения</h2>
        <p className="leading-relaxed">
          Интерактивный сценарий начинается с пациента 42 лет. Вы выбираете
          диагностическую последовательность, оцениваете стадию и определяете,
          когда терапия должна измениться.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-medium">Инструменты</h2>
        <ul className="list-disc space-y-2 pl-5 text-gray-300">
          <li>CAPP-seq / ctDNA как маркер минимальной остаточной болезни</li>
          <li>⁶⁸Ga-FAPI ПЭТ/КТ против микроскопического карциноматоза</li>
          <li>Ветвление: cT2N1 → cT4aN2</li>
        </ul>
      </section>

      <footer className="border-t border-white/10 pt-4 text-sm text-gray-400">
        Ветвящийся кейс будет доступен после запуска Supabase и авторизации.
      </footer>
    </article>
  );
}
