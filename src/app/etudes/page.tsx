const etudes = [
  { slug: 'etude-1', title: 'ЭТЮД I', name: 'Демографический шизофрен' },
  { slug: 'etude-2', title: 'ЭТЮД II', name: 'Мультиомиксная навигация: от ctDNA к скальпелю' },
  { slug: 'etude-3', title: 'ЭТЮД III', name: 'MATTERHORN и Новая Эра Иммунотерапии' },
  { slug: 'etude-4', title: 'ЭТЮД IV', name: 'CRITICS-II и точка возврата' },
  { slug: 'etude-5', title: 'ЭТЮД V', name: 'Da Vinci 5: Сенсорика против слепоты' },
  { slug: 'etude-6', title: 'ЭТЮД VI', name: 'ICG-Флуоресценция: Зелёный свет в тумане войны' },
  { slug: 'etude-7', title: 'ЭТЮД VII', name: 'Проксимальная резекция с DTR' },
  { slug: 'etude-8', title: 'ЭТЮД VIII', name: 'Аутермост-слойный доступ (OLA) при cT4a' },
  { slug: 'etude-9', title: 'ЭТЮД IX', name: 'PIPAC и HIPEC: Химия под давлением' },
  { slug: 'etude-10', title: 'ЭТЮД X', name: 'Симуляционная революция и Манифест Хирурга' },
  { slug: 'etude-11', title: 'ЭТЮД XI', name: 'MDT 2.0: От совещания к коллективному разуму' },
  { slug: 'etude-12', title: 'ЭТЮД XII', name: 'Патоморфоз как пророчество' },
];

export default function EtudesPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-10 space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">Этюды курса</h1>
      <p className="text-gray-400">
        Список интерактивных модулей. Нажмите на название, чтобы открыть.
      </p>
      <ul className="space-y-3">
        {etudes.map((item) => (
          <li key={item.slug}>
            <a
              href={`/etudes/${item.slug}`}
              className="block rounded-lg border border-white/10 p-4 transition hover:border-white/30 hover:bg-white/5"
            >
              <div className="text-sm text-gray-400">{item.title}</div>
              <div className="text-lg font-medium">{item.name}</div>
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
