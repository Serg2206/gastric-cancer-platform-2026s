export const metadata = {
  title: 'Регистрация',
};

export default function SignUpPage() {
  return (
    <div className="mx-auto max-w-md px-4 py-10">
      <h1 className="text-xl font-semibold text-white">Регистрация</h1>
      <p className="mt-2 text-sm text-slate-400">
        Здесь появится форма регистрации после подключения Clerk.
      </p>
    </div>
  );
}
