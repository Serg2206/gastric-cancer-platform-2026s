export default function Etude1Page() {
  return (
    <article className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">
          ЭТЮД I: «Демографический шизофрен»
        </h1>
        <p className="text-gray-400">
          Рак молодеет, хирург стареет. Эпидемиология YOGC и мутации CDH1.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-medium">Клинический контекст</h2>
        <p className="leading-relaxed">
          В этом этюде пациент — популяция. Мы рассматриваем тенденцию
          «омоложения» аденокарциномы желудка, связь с семейными синдромами
          и молекулярными маркерами, прежде чем перейти к интерактивному
          клиническому заданию.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-medium">Молекулярный фокус</h2>
        <ul className="list-disc space-y-2 pl-5 text-gray-300">
          <li>Ген CDH1: кишечная трубка и карцинома</li>
          <li>Генетическое консультирование при наследственных формах</li>
          <li>Ранние эндоскопические признаки в молодой когорте</li>
        </ul>
      </section>

      <footer className="border-t border-white/10 pt-4 text-sm text-gray-400">
        Интерактивный аудит и кейсы будут добавлены после подключения Supabase и авторизации.
      </footer>
    </article>
  );
}
