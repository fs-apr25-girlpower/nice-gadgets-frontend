import { Header } from './components/Header/Header';
import { Footer } from './components/Footer';
import { Outlet } from 'react-router-dom';
import { Providers } from './components/Providers';
import { UnicornAssistant } from './components/UnicornAssistant';

export const App = () => {
  const unicornMessages = [
    'Не зволікай, обирай!',
    'Кращі пропозиції чекають!',
    'Зазирни до нашого каталогу!',
    'Знайди свою мрію!',
    'Ми тут, щоб допомогти!',
  ];

  return (
    <Providers>
      <div className="App">
        <div className="wrapper min-h-screen flex flex-col">
          <Header />
          <main className="grow px-4 tablet:px-6 desktop:px-8 pb-16 tablet:pb-16 desktop:pb-20 pt-6">
            <Outlet />
          </main>
          <Footer />
        </div>

        <UnicornAssistant
          messages={unicornMessages}
          interval={5000}
        />
      </div>
    </Providers>
  );
};
