export const metadata = {
  title: 'Вход',
};

export default function SignInPage() {
  return (
    <div className="mx-auto max-w-md px-4 py-10">
      <h1 className="text-xl font-semibold text-white">Вход</h1>
      <p className="mt-2 text-sm text-slate-400">
        Здесь появится форма входа после подключения Clerk.
      </p>
    </div>
  );
}
