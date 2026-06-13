export default function Etude4Page() {
  return (
    <article className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">
          ЭТЮД IV: «CRITICS-II и точка возврата»
        </h1>
        <p className="text-gray-400">
          Тотальная неоадъювантная терапия и концепция Sterilized Field.
        </p>
      </header>
      <section className="space-y-3">
        <h2 className="text-xl font-medium">Ключевой смысл</h2>
        <p className="leading-relaxed">
          Этюд показывает разницу между биохимическим и морфологическим ответом,
          а также как решать: оперировать сразу или ждать реконвалесценции.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-medium">Интерактив</h2>
        <ul className="list-disc space-y-2 pl-5 text-gray-300">
          <li>Неоадъювантная химиотерапия vs TNT</li>
          <li>Оценкаfibrosis вместо опухоли</li>
          <li>Планирование хирургического поля</li>
        </ul>
      </section>
      <footer className="border-t border-white/10 pt-4 text-sm text-gray-400">
        Интерактивный протокол появится после интеграции баз данных.
      </footer>
    </article>
  );
}
