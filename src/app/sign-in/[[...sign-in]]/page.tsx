export default function SignInPlaceholder() {
  return (
    <main className="mx-auto max-w-md px-6 py-20 space-y-6 text-center">
      <h1 className="text-3xl font-semibold tracking-tight">Вход в платформу</h1>
      <p className="text-gray-400">
        Авторизация через Clerk будет добавлена после настройки окружения.
      </p>
      <div className="rounded-lg border border-white/10 p-4 text-left text-sm text-gray-300">
        После создания проекта в Clerk Dashboard вставьте ключи в{' '}
        <code className="font-mono">.env.local</code>.
      </div>
    </main>
  );
}
