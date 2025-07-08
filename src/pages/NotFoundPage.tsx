// type Props = {}

export const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-sky-100 to-blue-200 font-mono">
      <div className="text-8xl animate-bounce mb-4">🦄</div>
      <h1 className="text-5xl font-extrabold text-blue-600 mb-2">404</h1>
      <p className="text-2xl text-blue-900 mb-8">
        Ой, сторінку не знайдено!
        <br />
        Можливо, вона сховалася у веселковій хмарі ☁️
      </p>
      <a
        href="/"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition"
      >
        Повернутися на головну
      </a>
      <button
        className="mt-8 text-blue-700 underline hover:text-pink-500"
        onClick={() => alert('Секретний рівень розблоковано! 🥳')}
      >
        Не натискати!
      </button>
    </div>
  );
};
