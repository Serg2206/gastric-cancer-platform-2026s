import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Аденокарцинома Желудка: Молекулярная Эра Хирургии
        </h1>
        <p className="mt-4 text-lg text-slate-300">
          Формула проекта:{" "}
          <span className="font-semibold text-sky-400">
            ХИРУРГИЯ = МОЛЕКУЛА × АЛГОРИТМ × РУКА
          </span>
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/etudes"
            className="rounded-md bg-sky-600 px-4 py-2 font-semibold text-white hover:bg-sky-500"
          >
            Открыть дорожную карту
          </Link>
          <Link
            href="/about"
            className="rounded-md border border-slate-700 px-4 py-2 text-slate-200 hover:bg-slate-800"
          >
            О платформе
          </Link>
        </div>
      </section>
    </main>
  );
}
