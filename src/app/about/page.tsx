import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">О платформе</h1>
      <section className="space-y-3">
        <p>
          Платформа «Аденокарцинома Желудка: Молекулярная Эра Хирургии»
          создана для онкохирургов, резидентов и исследователей.
          Здесь современная хирургия представлена как интерпретация биологии
          опухоли, данных и технологий.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-medium">Структура курса</h2>
        <ul className="list-disc space-y-2 pl-5 text-gray-300">
          <li>12 интерактивных этюдов</li>
          <li>Мультидисциплинарные кейсы и симуляции</li>
          <li>AI-powered контент в будущих релизах</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-medium">Развитие платформы</h2>
        <p>Планируется интеграция Supabase, Clerk и AI Tutor.</p>
      </section>

      <div className="space-x-3">
        <Link
          href="/etudes"
          className="rounded-md bg-sky-600 px-4 py-2 font-semibold text-white hover:bg-sky-500"
        >
          Перейти к этюдам
        </Link>
      </div>
    </main>
  );
}
