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

export default function SiteNav() {
  return (
    <nav className="space-y-2 text-sm">
      <div className="text-xs font-semibold uppercase tracking-widest text-slate-400">
        Модули
      </div>
      <ul className="space-y-1">
        {etudes.map((item) => (
          <li key={item.slug}>
            <a
              href={`/etudes/${item.slug}`}
              className="block rounded-md px-2 py-1 text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              <span className="text-xs text-slate-500">{item.title}</span>
              <span className="ml-1">{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
